import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import boxen, { Options } from 'boxen';
import { cli } from 'cli-ux';
import chalk from 'chalk';
import Command, { Flags } from '../../base';
import { GetIssueQuery } from '../../generated/_documents';
import { render } from '../../components';
import { issueArgs, getIssueId } from '../../utils/issueId';

dayjs.extend(relativeTime);

type Issue = GetIssueQuery['issue'];

const boxenOptions: Options = { padding: 1, borderStyle: 'round' };

export default class IssueIndex extends Command {
  static description = 'Show issue info';

  static aliases = ['i'];

  static args = issueArgs;

  static flags = {
    description: Flags.boolean({ char: 'd', description: 'Show issue description' }),
    comments: Flags.boolean({ char: 'c', description: 'Show issue comments' }),
    open: Flags.boolean({ char: 'o', description: 'Open issue in web browser' }),
    branch: Flags.boolean({ char: 'b', description: 'Show branch name' }),
    project: Flags.boolean({ char: 'p', description: 'Show project name only' }),
    url: Flags.boolean({ char: 'u', description: 'Show issue url' }),
  };

  renderIssueComments(issue: Issue) {
    if (issue.comments?.nodes.length === 0) {
      this.log(`Issue ${issue.identifier} does not have any comments`);
    }

    const dim = chalk.dim;

    for (const comment of issue.comments!.nodes.reverse()) {
      const author = comment?.user?.displayName ?? '';
      const markdown = render
        .Markdown(`${comment.body}`)
        .replace(/\n\n$/, '')
        .padEnd(author.length + 6);

      const authorLabel = ` ${comment.user?.displayName} `;
      let commentBox = boxen(markdown, boxenOptions);

      const lengthOfBox = commentBox.match(/╭.*╮/)![0].length;

      commentBox = commentBox.replace(
        /╭.*╮/,
        `╭─${authorLabel.padEnd(lengthOfBox - 4, '─')}─╮`
      );

      const createdAt = dim(dayjs(comment.createdAt).fromNow());

      this.log('');
      this.log(`${commentBox}\n  ${createdAt}`);
    }
  }

  renderIssueDescription(issue: Issue) {
    const markdown = `${issue.identifier}\n # ${issue.title}\n${issue.description ?? ''}`;
    this.log('');
    this.log(boxen(render.Markdown(markdown), boxenOptions));
  }

  renderIssueBranch(issue: Issue) {
    const branchName = issue.branchName;
    this.log(branchName);
  }

  renderIssueProjcet(issue: Issue) {
    const projectName = issue.project?.name;
    this.log(projectName);
  }

  async run() {
    const { flags, args } = await this.parse(IssueIndex);

    const issueId = getIssueId(args);
    const issue = await this.linear.query.issue(issueId, {
      withComments: flags.comments,
    });

    if (Object.keys(flags).length === 0) {
      return render.IssueCard(issue);
    }

    if (flags.open) {
      return cli.open(issue.url);
    }

    if (flags.comments) {
      return this.renderIssueComments(issue);
    }

    if (flags.description) {
      return this.renderIssueDescription(issue);
    }

    if (flags.url) {
      return this.log(issue.url);
    }

    for (const flag in flags) {
      if (flags[flag as keyof typeof IssueIndex.flags]) {
        switch (flag) {
          case 'branch':
            this.renderIssueBranch(issue);
            break;
          case 'project':
            this.renderIssueProjcet(issue);
            break;
        }
      }
    }
  }
}
