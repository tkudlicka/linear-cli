export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents a date and time in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)  */
  DateTime: any;
  /** The `JSON` scalar type represents arbitrary values as *stringified* JSON */
  JSON: any;
  /** The `JSONObject` scalar type represents arbitrary values as *embedded* JSON */
  JSONObject: any;
  /** Represents a date in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)  */
  TimelessDate: any;
  /** A universally unique identifier as specified by RFC 4122. */
  UUID: any;
};

/** A bot actor is an actor that is not a user, but an application or integration. */
export type ActorBot = {
  __typename?: 'ActorBot';
  /** A url pointing to the avatar representing this bot. */
  avatarUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The display name of the bot. */
  name?: Maybe<Scalars['String']>;
  /** The sub type of the bot. */
  subType?: Maybe<Scalars['String']>;
  /** The type of bot. */
  type: Scalars['String'];
  /** The display name of the external user on behalf of which the bot acted. */
  userDisplayName?: Maybe<Scalars['String']>;
};

export type AirbyteConfigurationInput = {
  /** Linear export API key. */
  apiKey: Scalars['String'];
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  __typename?: 'ApiKey';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The label of the API key. */
  label: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The API key value. */
  key: Scalars['String'];
  /** The label for the API key. */
  label: Scalars['String'];
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ApiKey;
};

export type ApiKeyPayload = {
  __typename?: 'ApiKeyPayload';
  /** The API key that was created. */
  apiKey: ApiKey;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Public information of the OAuth application. */
export type Application = {
  __typename?: 'Application';
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** OAuth application's ID. */
  id: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Application name. */
  name: Scalars['String'];
};

/** A generic payload return from entity archive or deletion mutations. */
export type ArchivePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  __typename?: 'ArchiveResponse';
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars['String'];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float'];
  /** Whether the dependencies for the model objects are included in the archive. */
  includesDependencies: Scalars['Boolean'];
  /** The total number of entities in the archive. */
  totalCount: Scalars['Float'];
};

export type AsksChannelConnectPayload = {
  __typename?: 'AsksChannelConnectPayload';
  /** Whether the bot needs to be manually added to the channel. */
  addBot: Scalars['Boolean'];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The new Asks Slack channel mapping for the connected channel. */
  mapping: SlackChannelNameMapping;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Issue attachment (e.g. support ticket, pull request). */
export type Attachment = Node & {
  __typename?: 'Attachment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The creator of the attachment. */
  creator?: Maybe<User>;
  /** The non-Linear user who created the attachment. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue this attachment belongs to. */
  issue: Issue;
  /** Custom metadata related to the attachment. */
  metadata: Scalars['JSONObject'];
  /** Information about the source which created the attachment. */
  source?: Maybe<Scalars['JSONObject']>;
  /** An accessor helper to source.type, defines the source type of the attachment. */
  sourceType?: Maybe<Scalars['String']>;
  /** Content for the subtitle line in the Linear attachment widget. */
  subtitle?: Maybe<Scalars['String']>;
  /** Content for the title line in the Linear attachment widget. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Location of the attachment which is also used as an identifier. */
  url: Scalars['String'];
};

/** A generic payload return from entity archive mutations. */
export type AttachmentArchivePayload = ArchivePayload & {
  __typename?: 'AttachmentArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Attachment>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Attachment collection filtering options. */
export type AttachmentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: InputMaybe<Array<AttachmentCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all attachments. */
  every?: InputMaybe<AttachmentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: InputMaybe<Array<AttachmentCollectionFilter>>;
  /** Filters that needs to be matched by some attachments. */
  some?: InputMaybe<AttachmentFilter>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<SourceTypeComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  edges: Array<AttachmentEdge>;
  nodes: Array<Attachment>;
  pageInfo: PageInfo;
};

export type AttachmentCreateInput = {
  /** Create a linked comment with markdown body. */
  commentBody?: InputMaybe<Scalars['String']>;
  /** [Internal] Create a linked comment with Prosemirror body. Please use `commentBody` instead. */
  commentBodyData?: InputMaybe<Scalars['JSONObject']>;
  /** Create attachment as a user with the provided name. This option is only available to OAuth applications creating attachments in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource?: InputMaybe<Scalars['Boolean']>;
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The issue to associate the attachment with. */
  issueId: Scalars['String'];
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']>;
  /** The attachment title. */
  title: Scalars['String'];
  /** Attachment location which is also used as an unique identifier for the attachment. If another attachment is created with the same `url` value, existing record is updated instead. */
  url: Scalars['String'];
};

export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Attachment;
};

/** Attachment filtering options. */
export type AttachmentFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: InputMaybe<Array<AttachmentFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: InputMaybe<Array<AttachmentFilter>>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<SourceTypeComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentPayload = {
  __typename?: 'AttachmentPayload';
  /** The issue attachment that was created. */
  attachment: Attachment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type AttachmentSourcesPayload = {
  __typename?: 'AttachmentSourcesPayload';
  /** A unique list of all source types used in this workspace */
  sources: Scalars['JSONObject'];
};

export type AttachmentUpdateInput = {
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']>;
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']>;
  /** The attachment title. */
  title: Scalars['String'];
};

/** Workspace audit log entry object. */
export type AuditEntry = Node & {
  __typename?: 'AuditEntry';
  /** The user that caused the audit entry to be created. */
  actor?: Maybe<User>;
  /** The ID of the user that caused the audit entry to be created. */
  actorId?: Maybe<Scalars['String']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Country code of request resulting to audit entry. */
  countryCode?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** IP from actor when entry was recorded. */
  ip?: Maybe<Scalars['String']>;
  /** Additional metadata related to the audit entry. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The organization the audit log belongs to. */
  organization?: Maybe<Organization>;
  /** Additional information related to the request which performed the action. */
  requestInformation?: Maybe<Scalars['JSONObject']>;
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type AuditEntryConnection = {
  __typename?: 'AuditEntryConnection';
  edges: Array<AuditEntryEdge>;
  nodes: Array<AuditEntry>;
  pageInfo: PageInfo;
};

export type AuditEntryEdge = {
  __typename?: 'AuditEntryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: AuditEntry;
};

/** Audit entry filtering options. */
export type AuditEntryFilter = {
  /** Filters that the audit entry actor must satisfy. */
  actor?: InputMaybe<NullableUserFilter>;
  /** Comparator for the country code. */
  countryCode?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the IP address. */
  ip?: InputMaybe<StringComparator>;
  /** Comparator for the type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type AuditEntryType = {
  __typename?: 'AuditEntryType';
  /** Description of the audit entry type. */
  description: Scalars['String'];
  /** The audit entry type. */
  type: Scalars['String'];
};

export type AuthApiKey = {
  __typename?: 'AuthApiKey';
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
};

export type AuthApiKeyCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The API key value. */
  key: Scalars['String'];
};

export type AuthApiKeyPayload = {
  __typename?: 'AuthApiKeyPayload';
  /** The auth API key that was created. */
  authApiKey: AuthApiKey;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type AuthCreateOrJoinOrganizationResponse = {
  __typename?: 'AuthCreateOrJoinOrganizationResponse';
  authOrganization: AuthOrganization;
  authUser: AuthUser;
  grantDomainAccess?: Maybe<Scalars['Boolean']>;
  organization: AuthOrganization;
  user: AuthUser;
};

export type AuthIntegration = {
  __typename?: 'AuthIntegration';
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
};

/** [INTERNAL] An OAuth userId/createdDate tuple */
export type AuthMembership = {
  __typename?: 'AuthMembership';
  /** The date of the authorization */
  createdAt: Scalars['DateTime'];
  /** The authorizing userId */
  userId: Scalars['String'];
};

export type AuthOauthClient = {
  __typename?: 'AuthOauthClient';
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String'];
  /** The ID of the user who created the OAuth application. */
  creatorId: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer. */
  developerUrl: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** OAuth application's client name. */
  name: Scalars['String'];
  /** The ID of the workspace the OAuth application belongs to. */
  organizationId: Scalars['String'];
  /** Whether the OAuth application can be installed in other organizations. */
  publicEnabled: Scalars['Boolean'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']>;
  /** Webhook URL */
  webhookUrl?: Maybe<Scalars['String']>;
};

/** AuthOauthClient with token creator IDs and counts (memberships), for use in the GraphQL API. */
export type AuthOauthClientWithMemberships = {
  __typename?: 'AuthOauthClientWithMemberships';
  /** OAuth application's ID. */
  appId: Scalars['String'];
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** User IDs and membership dates of everyone who has authorized the application with the set of scopes. */
  memberships: Array<AuthMembership>;
  /** Application name. */
  name: Scalars['String'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
  /** Total number of members that authorized the application. */
  totalMembers: Scalars['Float'];
  /** The application's webhook URL. */
  webhookUrl?: Maybe<Scalars['String']>;
};

/** AuthOauthClient with scope from OauthToken, for use in the GraphQL API. */
export type AuthOauthClientWithScope = {
  __typename?: 'AuthOauthClientWithScope';
  /** OAuth application's ID. */
  appId: Scalars['String'];
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Application name. */
  name: Scalars['String'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
  /** The application's webhook URL. */
  webhookUrl?: Maybe<Scalars['String']>;
};

export type AuthOauthClientWithTokens = {
  __typename?: 'AuthOauthClientWithTokens';
  /** The auth OAuth client. */
  client: AuthOauthClient;
  /** The token matching the app, scope, and actor. */
  tokens: Array<OauthToken>;
};

/** An organization. Organizations are root-level objects that contain users and teams. */
export type AuthOrganization = {
  __typename?: 'AuthOrganization';
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars['String']>;
  /** The time at which deletion of the organization was requested. */
  deletionRequestedAt?: Maybe<Scalars['DateTime']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']>;
  /** The organization's name. */
  name: Scalars['String'];
  /** Previously used URL keys for the organization (last 3 are kept and redirected). */
  previousUrlKeys: Array<Scalars['String']>;
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean'];
  /** [INTERNAL] SAML settings */
  samlSettings?: Maybe<Scalars['JSONObject']>;
  /** Whether SCIM provisioning is enabled for organization. */
  scimEnabled: Scalars['Boolean'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String'];
  userCount: Scalars['Float'];
};

export type AuthOrganizationDomain = {
  __typename?: 'AuthOrganizationDomain';
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
};

export type AuthResolverResponse = {
  __typename?: 'AuthResolverResponse';
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars['Boolean']>;
  /** Organizations this account has access to, but is not yet a member. */
  availableOrganizations?: Maybe<Array<AuthOrganization>>;
  /** Email for the authenticated account. */
  email?: Maybe<Scalars['String']>;
  /** User account ID. */
  id: Scalars['String'];
  /** ID of the organization last accessed by the user. */
  lastUsedOrganizationId?: Maybe<Scalars['String']>;
  /** List of organizations this user account is part of but are currently locked because of the current auth service. */
  lockedOrganizations?: Maybe<Array<AuthOrganization>>;
  /** JWT token for authentication of the account. */
  token?: Maybe<Scalars['String']>;
  /** Users belonging to this account. */
  users: Array<AuthUser>;
};

export type AuthSuccessPayload = {
  __typename?: 'AuthSuccessPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A user that has access to the the resources of an organization. */
export type AuthUser = {
  __typename?: 'AuthUser';
  /** Whether the user is active. */
  active: Scalars['Boolean'];
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String'];
  /** The user's email address. */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** The user's full name. */
  name: Scalars['String'];
  /** Organization the user belongs to. */
  organization: AuthOrganization;
};

/** User authentication session. */
export type AuthenticationSession = {
  __typename?: 'AuthenticationSession';
  /** Used web browser. */
  browserType?: Maybe<Scalars['String']>;
  /** Client used for the session */
  client?: Maybe<Scalars['String']>;
  /** Country codes of all seen locations. */
  countryCodes: Array<Scalars['String']>;
  /** Date when the session was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  /** IP address. */
  ip?: Maybe<Scalars['String']>;
  /** When was the session last seen */
  lastActiveAt?: Maybe<Scalars['DateTime']>;
  /** Human readable location */
  location?: Maybe<Scalars['String']>;
  /** Location city name. */
  locationCity?: Maybe<Scalars['String']>;
  /** Location country name. */
  locationCountry?: Maybe<Scalars['String']>;
  /** Location country code. */
  locationCountryCode?: Maybe<Scalars['String']>;
  /** Name of the session, derived from the client and operating system */
  name: Scalars['String'];
  /** Operating system used for the session */
  operatingSystem?: Maybe<Scalars['String']>;
  /** Type of application used to authenticate. */
  type: AuthenticationSessionType;
  /** Date when the session was last updated. */
  updatedAt: Scalars['DateTime'];
  /** Session's user-agent. */
  userAgent?: Maybe<Scalars['String']>;
};

/** Authentication session information */
export type AuthenticationSessionResponse = {
  __typename?: 'AuthenticationSessionResponse';
  /** Used web browser. */
  browserType?: Maybe<Scalars['String']>;
  /** Client used for the session */
  client?: Maybe<Scalars['String']>;
  /** Country codes of all seen locations. */
  countryCodes: Array<Scalars['String']>;
  /** Date when the session was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  /** IP address. */
  ip?: Maybe<Scalars['String']>;
  /** Identifies the session used to make the request. */
  isCurrentSession: Scalars['Boolean'];
  /** When was the session last seen */
  lastActiveAt?: Maybe<Scalars['DateTime']>;
  /** Human readable location */
  location?: Maybe<Scalars['String']>;
  /** Location city name. */
  locationCity?: Maybe<Scalars['String']>;
  /** Location country name. */
  locationCountry?: Maybe<Scalars['String']>;
  /** Location country code. */
  locationCountryCode?: Maybe<Scalars['String']>;
  /** Name of the session, derived from the client and operating system */
  name: Scalars['String'];
  /** Operating system used for the session */
  operatingSystem?: Maybe<Scalars['String']>;
  /** Type of application used to authenticate. */
  type: AuthenticationSessionType;
  /** Date when the session was last updated. */
  updatedAt: Scalars['DateTime'];
  /** Session's user-agent. */
  userAgent?: Maybe<Scalars['String']>;
};

export enum AuthenticationSessionType {
  Android = 'android',
  Desktop = 'desktop',
  Ios = 'ios',
  Web = 'web'
}

/** [INTERNAL] Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  __typename?: 'AuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String'];
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Application name. */
  name: Scalars['String'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean'];
};

export type AuthorizedApplicationBase = {
  __typename?: 'AuthorizedApplicationBase';
  /** OAuth application's ID. */
  appId: Scalars['String'];
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Application name. */
  name: Scalars['String'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
};

/** Comparator for booleans. */
export type BooleanComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Not equals constraint. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** A comment associated with an issue. */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The comment content in markdown format. */
  body: Scalars['String'];
  /** [Internal] The comment content as a Prosemirror document. */
  bodyData: Scalars['String'];
  /** The bot that created the comment */
  botActor?: Maybe<ActorBot>;
  /** The children of the comment. */
  children: CommentConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The document content that the comment is associated with. */
  documentContent?: Maybe<DocumentContent>;
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars['DateTime']>;
  /** The external user who wrote the comment. */
  externalUser?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that the comment is associated with. */
  issue?: Maybe<Issue>;
  /** The parent comment under which the current comment is nested. */
  parent?: Maybe<Comment>;
  /** The project update that the comment is associated with. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /** Emoji reaction summary, grouped by emoji type */
  reactionData: Scalars['JSONObject'];
  /** The time the resolvingUser resolved the thread. */
  resolvedAt?: Maybe<Scalars['DateTime']>;
  /** The comment that resolved the thread. */
  resolvingComment?: Maybe<Comment>;
  /** The user that resolved the thread. */
  resolvingUser?: Maybe<User>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Comment's URL. */
  url: Scalars['String'];
  /** The user who wrote the comment. */
  user?: Maybe<User>;
};


/** A comment associated with an issue. */
export type CommentChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Comment filtering options. */
export type CommentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentCollectionFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the comments document content must satisfy. */
  documentContent?: InputMaybe<DocumentContentFilter>;
  /** Filters that needs to be matched by all comments. */
  every?: InputMaybe<CommentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<IssueFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentCollectionFilter>>;
  /** Filters that the comments project update must satisfy. */
  projectUpdate?: InputMaybe<ProjectUpdateFilter>;
  /** Filters that needs to be matched by some comments. */
  some?: InputMaybe<CommentFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  /** The comment content in markdown format. */
  body?: InputMaybe<Scalars['String']>;
  /** [Internal] The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']>;
  /** Create comment as a user with the provided name. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']>;
  /** Flag to indicate this comment should be created on the issue's synced Slack comment thread. If no synced Slack comment thread exists, the mutation will fail. */
  createOnSyncedSlackThread?: InputMaybe<Scalars['Boolean']>;
  /** The date when the comment was created (e.g. if importing from another system). Must be a date in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  displayIconUrl?: InputMaybe<Scalars['String']>;
  /** Flag to prevent auto subscription to the issue the comment is created on. */
  doNotSubscribeToIssue?: InputMaybe<Scalars['Boolean']>;
  /** The document content to associate the comment with. */
  documentContentId?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The issue to associate the comment with. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The parent comment under which to nest a current comment. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The prject update to associate the comment with. */
  projectUpdateId?: InputMaybe<Scalars['String']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Comment;
};

/** Comment filtering options. */
export type CommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the comments document content must satisfy. */
  documentContent?: InputMaybe<DocumentContentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<IssueFilter>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentFilter>>;
  /** Filters that the comments project update must satisfy. */
  projectUpdate?: InputMaybe<ProjectUpdateFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentPayload = {
  __typename?: 'CommentPayload';
  /** The comment that was created or updated. */
  comment: Comment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: InputMaybe<Scalars['String']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']>;
  /** [INTERNAL] The child comment that resolves this thread. */
  resolvingCommentId?: InputMaybe<Scalars['String']>;
  /** [INTERNAL] The user who resolved this thread. */
  resolvingUserId?: InputMaybe<Scalars['String']>;
};

/** A company related to issue's origin. */
export type Company = Node & {
  __typename?: 'Company';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Custom company properties. */
  companyProperties: Scalars['JSONObject'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who added the company. */
  creator: User;
  /** Company ID in an external system. */
  externalId: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Company logo URL. */
  logoUrl?: Maybe<Scalars['String']>;
  /** Company name. */
  name: Scalars['String'];
  /** The organization of the customer. */
  organization: Organization;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Company website URL. */
  websiteUrl?: Maybe<Scalars['String']>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  edges: Array<CompanyEdge>;
  nodes: Array<Company>;
  pageInfo: PageInfo;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Company;
};

export type ContactCreateInput = {
  /** User's browser information. */
  browser?: InputMaybe<Scalars['String']>;
  /** User's Linear client information. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** User's device information. */
  device?: InputMaybe<Scalars['String']>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: InputMaybe<Scalars['Int']>;
  /** The message the user sent. */
  message: Scalars['String'];
  /** User's operating system. */
  operatingSystem?: InputMaybe<Scalars['String']>;
  /** The type of support contact. */
  type: Scalars['String'];
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** [INTERNAL] Input for sending a message to the Linear Sales team */
export type ContactSalesCreateInput = {
  /** Size of the company. */
  companySize?: InputMaybe<Scalars['String']>;
  /** Work email of the person requesting information. */
  email: Scalars['String'];
  /** The message the user sent. */
  message?: InputMaybe<Scalars['String']>;
  /** Name of the person requesting information. */
  name: Scalars['String'];
};

/** [Internal] Comparator for content. */
export type ContentComparator = {
  /** [Internal] Contains constraint. */
  contains?: InputMaybe<Scalars['String']>;
  /** [Internal] Not-contains constraint. */
  notContains?: InputMaybe<Scalars['String']>;
};

export enum ContextViewType {
  ActiveCycle = 'activeCycle',
  ActiveIssues = 'activeIssues',
  Backlog = 'backlog',
  Triage = 'triage',
  UpcomingCycle = 'upcomingCycle'
}

export type CreateCsvExportReportPayload = {
  __typename?: 'CreateCsvExportReportPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CreateOrJoinOrganizationResponse = {
  __typename?: 'CreateOrJoinOrganizationResponse';
  organization: AuthOrganization;
  user: AuthUser;
};

export type CreateOrganizationInput = {
  /** Whether the organization should allow email domain access. */
  domainAccess?: InputMaybe<Scalars['Boolean']>;
  /** The name of the organization. */
  name: Scalars['String'];
  /** The timezone of the organization, passed in by client. */
  timezone?: InputMaybe<Scalars['String']>;
  /** The URL key of the organization. */
  urlKey: Scalars['String'];
  /** JSON serialized UTM parameters associated with the creation of the workspace. */
  utm?: InputMaybe<Scalars['String']>;
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  __typename?: 'CustomView';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the custom view. */
  creator: User;
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']>;
  /** The filter applied to issues in the custom view. */
  filterData: Scalars['JSONObject'];
  /**
   * The filters applied to issues in the custom view.
   * @deprecated Will be replaced by `filterData` in a future update
   */
  filters: Scalars['JSONObject'];
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The model name of the custom view. */
  modelName: Scalars['String'];
  /** The name of the custom view. */
  name: Scalars['String'];
  /** The organization of the custom view. */
  organization: Organization;
  /** The user who owns the custom view. */
  owner: User;
  /** [ALPHA] The filter applied to projects in the custom view. */
  projectFilterData?: Maybe<Scalars['JSONObject']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars['Boolean'];
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** [ALPHA] The user who last updated the custom view. */
  updatedBy: User;
};

export type CustomViewConnection = {
  __typename?: 'CustomViewConnection';
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewCreateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<Scalars['JSONObject']>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the custom view. */
  name: Scalars['String'];
  /** The owner of the custom view. */
  ownerId?: InputMaybe<Scalars['String']>;
  /** [ALPHA] The project filter applied to issues in the custom view. */
  projectFilterData?: InputMaybe<Scalars['JSONObject']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']>;
};

export type CustomViewEdge = {
  __typename?: 'CustomViewEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: CustomView;
};

export type CustomViewHasSubscribersPayload = {
  __typename?: 'CustomViewHasSubscribersPayload';
  /** Whether the custom view has subscribers. */
  hasSubscribers: Scalars['Boolean'];
};

/** A custom view notification subscription. */
export type CustomViewNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'CustomViewNotificationSubscription';
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The custom view subscribed to. */
  customView: CustomView;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type CustomViewPayload = {
  __typename?: 'CustomViewPayload';
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CustomViewSuggestionPayload = {
  __typename?: 'CustomViewSuggestionPayload';
  /** The suggested view description. */
  description?: Maybe<Scalars['String']>;
  /** The suggested view icon. */
  icon?: Maybe<Scalars['String']>;
  /** The suggested view name. */
  name?: Maybe<Scalars['String']>;
};

export type CustomViewUpdateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<Scalars['JSONObject']>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']>;
  /** The name of the custom view. */
  name?: InputMaybe<Scalars['String']>;
  /** The owner of the custom view. */
  ownerId?: InputMaybe<Scalars['String']>;
  /** [ALPHA] The project filter applied to issues in the custom view. */
  projectFilterData?: InputMaybe<Scalars['JSONObject']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  __typename?: 'Cycle';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the cycle was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The cycle's description. */
  description?: Maybe<Scalars['String']>;
  /** The end time of the cycle. */
  endsAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The number of in progress estimation points after each day. */
  inProgressScopeHistory: Array<Scalars['Float']>;
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars['Float']>;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']>;
  /** The number of the cycle. */
  number: Scalars['Float'];
  /** The overall progress of the cycle. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float'];
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars['Float']>;
  /** The start time of the cycle. */
  startsAt: Scalars['DateTime'];
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type CycleArchivePayload = ArchivePayload & {
  __typename?: 'CycleArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CycleConnection = {
  __typename?: 'CycleConnection';
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleCreateInput = {
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: InputMaybe<Scalars['DateTime']>;
  /** The description of the cycle. */
  description?: InputMaybe<Scalars['String']>;
  /** The end date of the cycle. */
  endsAt: Scalars['DateTime'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']>;
  /** The start date of the cycle. */
  startsAt: Scalars['DateTime'];
  /** The team to associate the cycle with. */
  teamId: Scalars['String'];
};

export type CycleEdge = {
  __typename?: 'CycleEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Cycle;
};

/** Cycle filtering options. */
export type CycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the filtering active cycle. */
  isActive?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering future cycles. */
  isFuture?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering next cycle. */
  isNext?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering past cycles. */
  isPast?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: InputMaybe<BooleanComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A cycle notification subscription. */
export type CycleNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'CycleNotificationSubscription';
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The cycle subscribed to. */
  cycle: Cycle;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type CyclePayload = {
  __typename?: 'CyclePayload';
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CycleShiftAllInput = {
  /** The number of days to shift the cycles by. */
  daysToShift: Scalars['Float'];
  /** The cycle id at which to start the shift. */
  id: Scalars['String'];
};

export type CycleUpdateInput = {
  /** The end date of the cycle. */
  completedAt?: InputMaybe<Scalars['DateTime']>;
  /** The description of the cycle. */
  description?: InputMaybe<Scalars['String']>;
  /** The end date of the cycle. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']>;
  /** The start date of the cycle. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

/** Comparator for dates. */
export type DateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTime']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** [INTERNAL] By which resolution is a date defined. */
export enum DateResolutionType {
  HalfYear = 'halfYear',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year'
}

/** The day of the week. */
export enum Day {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars['String'];
};

/** A generic payload return from entity deletion mutations. */
export type DeletePayload = ArchivePayload & {
  __typename?: 'DeletePayload';
  /** The identifier of the deleted entity. */
  entityId: Scalars['String'];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A document for a project. */
export type Document = Node & {
  __typename?: 'Document';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']>;
  /** The documents content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /**
   * The documents content as a Prosemirror document.
   * @deprecated Use content instead.
   */
  contentData?: Maybe<Scalars['JSON']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the document. */
  creator: User;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The last template that was applied to this document. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The project that the document is associated with. */
  project: Project;
  /** The document's unique URL slug. */
  slugId: Scalars['String'];
  /** The order of the item in the project resources list. */
  sortOrder: Scalars['Float'];
  /** The document title. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user who last updated the document. */
  updatedBy: User;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  edges: Array<DocumentEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
};

/** A document content for a project. */
export type DocumentContent = Node & {
  __typename?: 'DocumentContent';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The document content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: Maybe<Scalars['JSONObject']>;
  /** The document content state as a base64 encoded string. */
  contentState?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The document that the content is associated with. */
  document?: Maybe<Document>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that the content is associated with. */
  issue?: Maybe<Issue>;
  /** The project that the content is associated with. */
  project?: Maybe<Project>;
  /** The project milestone that the content is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** The time at which the document content was restored from a previous version */
  restoredAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

/** Document content filtering options. */
export type DocumentContentFilter = {
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A document content history for a document */
export type DocumentContentHistory = Node & {
  __typename?: 'DocumentContentHistory';
  /** IDs of actors whose edits went into this history item. */
  actorIds: Array<Scalars['String']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: Maybe<Scalars['JSONObject']>;
  /** The timestamp associated with the DocumentContent when it was originally saved  */
  contentDataSnapshotAt: Scalars['DateTime'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The document content that this history item is associated with. */
  documentContent: DocumentContent;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type DocumentContentHistoryPayload = {
  __typename?: 'DocumentContentHistoryPayload';
  /** The document content history entries. */
  history?: Maybe<Array<DocumentContentHistoryType>>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type DocumentContentHistoryType = {
  __typename?: 'DocumentContentHistoryType';
  /** The ID of the author of the change. */
  actorIds?: Maybe<Array<Scalars['String']>>;
  /** [Internal] The document content as Prosemirror document. */
  contentData: Scalars['JSON'];
  /** The date when the document content history snapshot was taken. This can be different than createdAt since the content is captured from its state at the previously known updatedAt timestamp in the case of an update. On document create, these timestamps can be the same. */
  contentDataSnapshotAt: Scalars['DateTime'];
  /** The date when the document content history entry was created. */
  createdAt: Scalars['DateTime'];
  /** The UUID of the document content history entry. */
  id: Scalars['String'];
};

export type DocumentCreateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The ID of the last template applied to the document. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']>;
  /** Related project for the document. */
  projectId: Scalars['String'];
  /** The order of the item in the project resources list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The title of the document. */
  title: Scalars['String'];
};

export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Document;
};

export type DocumentPayload = {
  __typename?: 'DocumentPayload';
  /** The document that was created or updated. */
  document: Document;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type DocumentSearchPayload = {
  __typename?: 'DocumentSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<DocumentSearchResultEdge>;
  nodes: Array<DocumentSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float'];
};

export type DocumentSearchResult = Node & {
  __typename?: 'DocumentSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']>;
  /** The documents content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /**
   * The documents content as a Prosemirror document.
   * @deprecated Use content instead.
   */
  contentData?: Maybe<Scalars['JSON']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the document. */
  creator: User;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The last template that was applied to this document. */
  lastAppliedTemplate?: Maybe<Template>;
  /** Metadata related to search result */
  metadata: Scalars['JSONObject'];
  /** The project that the document is associated with. */
  project: Project;
  /** The document's unique URL slug. */
  slugId: Scalars['String'];
  /** The order of the item in the project resources list. */
  sortOrder: Scalars['Float'];
  /** The document title. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user who last updated the document. */
  updatedBy: User;
};

export type DocumentSearchResultConnection = {
  __typename?: 'DocumentSearchResultConnection';
  edges: Array<DocumentSearchResultEdge>;
  nodes: Array<DocumentSearchResult>;
  pageInfo: PageInfo;
};

export type DocumentSearchResultEdge = {
  __typename?: 'DocumentSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: DocumentSearchResult;
};

export type DocumentUpdateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']>;
  /** The ID of the last template applied to the document. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']>;
  /** Related project for the document. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The order of the item in the project resources list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The title of the document. */
  title?: InputMaybe<Scalars['String']>;
};

export type EmailSubscribeInput = {
  /** [INTERNAL] Email to subscribe. */
  email: Scalars['String'];
};

export type EmailSubscribePayload = {
  __typename?: 'EmailSubscribePayload';
  /** [INTERNAL] Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EmailUnsubscribeInput = {
  /** The user's email validation token. */
  token: Scalars['String'];
  /** Email type to unsubscribed from. */
  type: Scalars['String'];
  /** The identifier of the user. */
  userId: Scalars['String'];
};

export type EmailUnsubscribePayload = {
  __typename?: 'EmailUnsubscribePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EmailUserAccountAuthChallengeInput = {
  /** Auth code for the client initiating the sequence. */
  clientAuthCode?: InputMaybe<Scalars['String']>;
  /** The email for which to generate the magic login code. */
  email: Scalars['String'];
  /** The organization invite link to associate with this authentication. */
  inviteLink?: InputMaybe<Scalars['String']>;
  /** Whether the login was requested from the desktop app. */
  isDesktop?: InputMaybe<Scalars['Boolean']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']>;
};

export type EmailUserAccountAuthChallengeResponse = {
  __typename?: 'EmailUserAccountAuthChallengeResponse';
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars['String'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A custom emoji. */
export type Emoji = Node & {
  __typename?: 'Emoji';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the emoji. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The emoji's name. */
  name: Scalars['String'];
  /** The organization that the emoji belongs to. */
  organization: Organization;
  /** The source of the emoji. */
  source: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The emoji image URL. */
  url: Scalars['String'];
};

export type EmojiConnection = {
  __typename?: 'EmojiConnection';
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the custom emoji. */
  name: Scalars['String'];
  /** The URL for the emoji. */
  url: Scalars['String'];
};

export type EmojiEdge = {
  __typename?: 'EmojiEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Emoji;
};

export type EmojiPayload = {
  __typename?: 'EmojiPayload';
  /** The emoji that was created. */
  emoji: Emoji;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A basic entity. */
export type Entity = {
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

/** Comparator for estimates. */
export type EstimateComparator = {
  /** Compound filters, one of which need to be matched by the estimate. */
  and?: InputMaybe<Array<NullableNumberComparator>>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, all of which need to be matched by the estimate. */
  or?: InputMaybe<Array<NullableNumberComparator>>;
};

/** [ALPHA] An external authenticated (e.g., through Slack) user which doesn't have a Linear account, but can create and update entities in Linear from the external system that authenticated them. */
export type ExternalUser = Node & {
  __typename?: 'ExternalUser';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** An URL to the external user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The external user's display name. Unique within each organization. Can match the display name of an actual user. */
  displayName: Scalars['String'];
  /** The external user's email address. */
  email?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The last time the external user was seen interacting with Linear. */
  lastSeen?: Maybe<Scalars['DateTime']>;
  /** The external user's full name. */
  name: Scalars['String'];
  /** Organization the external user belongs to. */
  organization: Organization;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type ExternalUserConnection = {
  __typename?: 'ExternalUserConnection';
  edges: Array<ExternalUserEdge>;
  nodes: Array<ExternalUser>;
  pageInfo: PageInfo;
};

export type ExternalUserEdge = {
  __typename?: 'ExternalUserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ExternalUser;
};

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  __typename?: 'Favorite';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Children of the favorite. Only applies to favorites of type folder. */
  children: FavoriteConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The favorited custom view. */
  customView?: Maybe<CustomView>;
  /** The favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** The favorited document. */
  document?: Maybe<Document>;
  /** The name of the folder. Only applies to favorites of type folder. */
  folderName?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The favorited issue. */
  issue?: Maybe<Issue>;
  /** The favorited label. */
  label?: Maybe<IssueLabel>;
  /** The owner of the favorite. */
  owner: User;
  /** The parent folder of the favorite. */
  parent?: Maybe<Favorite>;
  /** The team of the favorited predefined view. */
  predefinedViewTeam?: Maybe<Team>;
  /** The type of favorited predefined view. */
  predefinedViewType?: Maybe<Scalars['String']>;
  /** The favorited project. */
  project?: Maybe<Project>;
  /** The targeted tab of the project. */
  projectTab?: Maybe<ProjectTab>;
  /** The favorited team of the project. */
  projectTeam?: Maybe<Team>;
  /** The favorited roadmap. */
  roadmap?: Maybe<Roadmap>;
  /** The order of the item in the favorites list. */
  sortOrder: Scalars['Float'];
  /** The type of the favorite. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The favorited user. */
  user?: Maybe<User>;
};


/** User favorites presented in the sidebar. */
export type FavoriteChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type FavoriteConnection = {
  __typename?: 'FavoriteConnection';
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteCreateInput = {
  /** The identifier of the custom view to favorite. */
  customViewId?: InputMaybe<Scalars['String']>;
  /** The identifier of the cycle to favorite. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The identifier of the document to favorite. */
  documentId?: InputMaybe<Scalars['String']>;
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the issue to favorite. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The identifier of the label to favorite. */
  labelId?: InputMaybe<Scalars['String']>;
  /** The parent folder of the favorite. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The identifier of team for the predefined view to favorite. */
  predefinedViewTeamId?: InputMaybe<Scalars['String']>;
  /** The type of the predefined view to favorite. */
  predefinedViewType?: InputMaybe<Scalars['String']>;
  /** The identifier of the project to favorite. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The tab of the project to favorite. */
  projectTab?: InputMaybe<ProjectTab>;
  /** The identifier of the project team to favorite. */
  projectTeamId?: InputMaybe<Scalars['String']>;
  /** The identifier of the roadmap to favorite. */
  roadmapId?: InputMaybe<Scalars['String']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The identifier of the user to favorite. */
  userId?: InputMaybe<Scalars['String']>;
};

export type FavoriteEdge = {
  __typename?: 'FavoriteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Favorite;
};

export type FavoritePayload = {
  __typename?: 'FavoritePayload';
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type FavoriteUpdateInput = {
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']>;
  /** The identifier (in UUID v4 format) of the folder to move the favorite under. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type FrontAttachmentPayload = {
  __typename?: 'FrontAttachmentPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Front specific settings. */
export type FrontSettings = {
  __typename?: 'FrontSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']>;
};

export type FrontSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']>;
};

/** A trigger that updates the issue status according to Git automations. */
export type GitAutomationState = Node & {
  __typename?: 'GitAutomationState';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The target branch, if null, the automation will be triggered on any branch. */
  branchPattern: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The event that triggers the automation. */
  event: GitAutomationStates;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The associated workflow state. */
  state?: Maybe<WorkflowState>;
  /** The team to which this automation state belongs. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type GitAutomationStateConnection = {
  __typename?: 'GitAutomationStateConnection';
  edges: Array<GitAutomationStateEdge>;
  nodes: Array<GitAutomationState>;
  pageInfo: PageInfo;
};

export type GitAutomationStateCreateInput = {
  /** The target branch pattern. If null, all branches are targeted. */
  branchPattern?: InputMaybe<Scalars['String']>;
  /** The event that triggers the automation. */
  event: GitAutomationStates;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The associated workflow state. If null, will override default behaviour and take no action. */
  stateId?: InputMaybe<Scalars['String']>;
  /** The team associated with the automation state. */
  teamId: Scalars['String'];
};

export type GitAutomationStateEdge = {
  __typename?: 'GitAutomationStateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: GitAutomationState;
};

export type GitAutomationStatePayload = {
  __typename?: 'GitAutomationStatePayload';
  /** The automation state that was created or updated. */
  gitAutomationState: GitAutomationState;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type GitAutomationStateUpdateInput = {
  /** The target branch pattern. If null, all branches are targeted. */
  branchPattern?: InputMaybe<Scalars['String']>;
  /** The event that triggers the automation. */
  event?: InputMaybe<GitAutomationStates>;
  /** The associated workflow state. */
  stateId?: InputMaybe<Scalars['String']>;
};

/** The various states of a pull/merge request. */
export enum GitAutomationStates {
  Draft = 'draft',
  Merge = 'merge',
  Mergeable = 'mergeable',
  Review = 'review',
  Start = 'start'
}

export type GitHubCommitIntegrationPayload = {
  __typename?: 'GitHubCommitIntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The webhook secret to provide to GitHub. */
  webhookSecret: Scalars['String'];
};

/** Metadata and settings for a GitHub Personal integration. */
export type GitHubPersonalSettings = {
  __typename?: 'GitHubPersonalSettings';
  /** The GitHub user's name */
  login: Scalars['String'];
};

export type GitHubPersonalSettingsInput = {
  /** The GitHub user's name */
  login: Scalars['String'];
};

/** GitHub repos available to sync. */
export type GitHubRepo = {
  __typename?: 'GitHubRepo';
  /** The full name of the repository. */
  fullName: Scalars['String'];
  /** The GitHub repo id. */
  id: Scalars['Float'];
};

export type GitHubRepoInput = {
  /** The full name of the repository. */
  fullName: Scalars['String'];
  /** The GitHub repo id. */
  id: Scalars['Float'];
};

/** Metadata and settings for a GitHub integration. */
export type GitHubSettings = {
  __typename?: 'GitHubSettings';
  /** The avatar URL for the GitHub organization */
  orgAvatarUrl: Scalars['String'];
  /** The GitHub organization's name */
  orgLogin: Scalars['String'];
  /** The names of the repositories connected for the GitHub integration */
  repositories?: Maybe<Array<GitHubRepo>>;
  /** Mapping of team to repository for syncing */
  repositoriesMapping?: Maybe<Array<TeamRepoMapping>>;
};

export type GitHubSettingsInput = {
  /** The avatar URL for the GitHub organization */
  orgAvatarUrl: Scalars['String'];
  /** The GitHub organization's name */
  orgLogin: Scalars['String'];
  /** The names of the repositories connected for the GitHub integration */
  repositories?: InputMaybe<Array<GitHubRepoInput>>;
  /** Mapping of team to repository for syncing */
  repositoriesMapping?: InputMaybe<Array<TeamRepoMappingInput>>;
};

/** Metadata and settings for a GitLab integration. */
export type GitLabSettings = {
  __typename?: 'GitLabSettings';
  /** The ISO timestamp the GitLab access token expires */
  expiresAt?: Maybe<Scalars['String']>;
  /** Whether the token is limited to a read-only scope */
  readonly?: Maybe<Scalars['Boolean']>;
  /** The self-hosted URL of the GitLab instance */
  url?: Maybe<Scalars['String']>;
};

export type GitLabSettingsInput = {
  /** The ISO timestamp the GitLab access token expires */
  expiresAt?: InputMaybe<Scalars['String']>;
  /** Whether the token is limited to a read-only scope */
  readonly?: InputMaybe<Scalars['Boolean']>;
  /** The self-hosted URL of the GitLab instance */
  url?: InputMaybe<Scalars['String']>;
};

/** GitHub OAuth token, plus information about the organizations the user is a member of. */
export type GithubOAuthTokenPayload = {
  __typename?: 'GithubOAuthTokenPayload';
  /** A list of the GitHub organizations the user is a member of with attached repositories. */
  organizations?: Maybe<Array<GithubOrg>>;
  /** The OAuth token if the operation to fetch it was successful. */
  token?: Maybe<Scalars['String']>;
};

/** Relevant information for the GitHub organization. */
export type GithubOrg = {
  __typename?: 'GithubOrg';
  /** GitHub organization id. */
  id: Scalars['String'];
  /** Whether or not this org is the user's personal repositories. */
  isPersonal?: Maybe<Scalars['Boolean']>;
  /** The login for the GitHub organization. */
  login: Scalars['String'];
  /** The name of the GitHub organization. */
  name: Scalars['String'];
  /** Repositories that the organization owns. */
  repositories: Array<GithubRepo>;
};

/** Relevant information for the GitHub repository. */
export type GithubRepo = {
  __typename?: 'GithubRepo';
  /** The id of the GitHub repository. */
  id: Scalars['String'];
  /** The name of the GitHub repository. */
  name: Scalars['String'];
};

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  __typename?: 'GoogleSheetsSettings';
  sheetId: Scalars['Float'];
  spreadsheetId: Scalars['String'];
  spreadsheetUrl: Scalars['String'];
  updatedIssuesAt: Scalars['DateTime'];
};

export type GoogleSheetsSettingsInput = {
  sheetId: Scalars['Float'];
  spreadsheetId: Scalars['String'];
  spreadsheetUrl: Scalars['String'];
  updatedIssuesAt: Scalars['DateTime'];
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars['String'];
  /** An optional invite link for an organization. */
  inviteLink?: InputMaybe<Scalars['String']>;
  /** The URI to redirect the user to. */
  redirectUri?: InputMaybe<Scalars['String']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String'];
};

/** Comparator for identifiers. */
export type IdComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['ID']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['ID']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type ImageUploadFromUrlPayload = {
  __typename?: 'ImageUploadFromUrlPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The URL containing the image. */
  url?: Maybe<Scalars['String']>;
};

/** An integration with an external service. */
export type Integration = Node & {
  __typename?: 'Integration';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user that added the integration. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The integration's type. */
  service: Scalars['String'];
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IntegrationConnection = {
  __typename?: 'IntegrationConnection';
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  __typename?: 'IntegrationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Integration;
};

export type IntegrationPayload = {
  __typename?: 'IntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IntegrationRequestInput = {
  /** Email associated with the request. */
  email?: InputMaybe<Scalars['String']>;
  /** Name of the requested integration. */
  name: Scalars['String'];
};

export type IntegrationRequestPayload = {
  __typename?: 'IntegrationRequestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Linear supported integration services. */
export enum IntegrationService {
  Airbyte = 'airbyte',
  Discord = 'discord',
  Figma = 'figma',
  FigmaPlugin = 'figmaPlugin',
  Front = 'front',
  Github = 'github',
  GithubCommit = 'githubCommit',
  GithubPersonal = 'githubPersonal',
  Gitlab = 'gitlab',
  GoogleCalendarPersonal = 'googleCalendarPersonal',
  GoogleSheets = 'googleSheets',
  Intercom = 'intercom',
  Jira = 'jira',
  JiraPersonal = 'jiraPersonal',
  Loom = 'loom',
  Notion = 'notion',
  PagerDuty = 'pagerDuty',
  Sentry = 'sentry',
  Slack = 'slack',
  SlackAsks = 'slackAsks',
  SlackOrgProjectUpdatesPost = 'slackOrgProjectUpdatesPost',
  SlackPersonal = 'slackPersonal',
  SlackPost = 'slackPost',
  SlackProjectPost = 'slackProjectPost',
  SlackProjectUpdatesPost = 'slackProjectUpdatesPost',
  Zendesk = 'zendesk'
}

/** The integration resource's settings */
export type IntegrationSettings = {
  __typename?: 'IntegrationSettings';
  front?: Maybe<FrontSettings>;
  gitHub?: Maybe<GitHubSettings>;
  gitHubPersonal?: Maybe<GitHubPersonalSettings>;
  gitLab?: Maybe<GitLabSettings>;
  googleSheets?: Maybe<GoogleSheetsSettings>;
  intercom?: Maybe<IntercomSettings>;
  jira?: Maybe<JiraSettings>;
  jiraPersonal?: Maybe<JiraPersonalSettings>;
  notion?: Maybe<NotionSettings>;
  pagerDuty?: Maybe<PagerDutySettings>;
  sentry?: Maybe<SentrySettings>;
  slack?: Maybe<SlackSettings>;
  slackAsks?: Maybe<SlackAsksSettings>;
  slackOrgProjectUpdatesPost?: Maybe<SlackPostSettings>;
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
  zendesk?: Maybe<ZendeskSettings>;
};

export type IntegrationSettingsInput = {
  front?: InputMaybe<FrontSettingsInput>;
  gitHub?: InputMaybe<GitHubSettingsInput>;
  gitHubPersonal?: InputMaybe<GitHubPersonalSettingsInput>;
  gitLab?: InputMaybe<GitLabSettingsInput>;
  googleSheets?: InputMaybe<GoogleSheetsSettingsInput>;
  intercom?: InputMaybe<IntercomSettingsInput>;
  jira?: InputMaybe<JiraSettingsInput>;
  jiraPersonal?: InputMaybe<JiraPersonalSettingsInput>;
  notion?: InputMaybe<NotionSettingsInput>;
  pagerDuty?: InputMaybe<PagerDutyInput>;
  sentry?: InputMaybe<SentrySettingsInput>;
  slack?: InputMaybe<SlackSettingsInput>;
  slackAsks?: InputMaybe<SlackAsksSettingsInput>;
  slackOrgProjectUpdatesPost?: InputMaybe<SlackPostSettingsInput>;
  slackPost?: InputMaybe<SlackPostSettingsInput>;
  slackProjectPost?: InputMaybe<SlackPostSettingsInput>;
  zendesk?: InputMaybe<ZendeskSettingsInput>;
};

/** Join table between templates and integrations */
export type IntegrationTemplate = Node & {
  __typename?: 'IntegrationTemplate';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** ID of the foreign entity in the external integration this template is for, e.g., Slack channel ID. */
  foreignEntityId?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The integration that the template is associated with. */
  integration: Integration;
  /** The template that the integration is associated with. */
  template: Template;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IntegrationTemplateConnection = {
  __typename?: 'IntegrationTemplateConnection';
  edges: Array<IntegrationTemplateEdge>;
  nodes: Array<IntegrationTemplate>;
  pageInfo: PageInfo;
};

export type IntegrationTemplateCreateInput = {
  /** The foreign identifier in the other service. */
  foreignEntityId?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the integration. */
  integrationId: Scalars['String'];
  /** The identifier of the template. */
  templateId: Scalars['String'];
};

export type IntegrationTemplateEdge = {
  __typename?: 'IntegrationTemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IntegrationTemplate;
};

export type IntegrationTemplatePayload = {
  __typename?: 'IntegrationTemplatePayload';
  /** The IntegrationTemplate that was created or updated. */
  integrationTemplate: IntegrationTemplate;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The configuration of all integrations for a project or a team. */
export type IntegrationsSettings = Node & {
  __typename?: 'IntegrationsSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Project which those settings apply to. */
  project?: Maybe<Project>;
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when an SLA is breached */
  slackIssueSlaBreached?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when an SLA is at high risk */
  slackIssueSlaHighRisk?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: Maybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: Maybe<Scalars['Boolean']>;
  /** Whether to send a new project update to team Slack channels. */
  slackProjectUpdateCreatedToTeam?: Maybe<Scalars['Boolean']>;
  /** Whether to send a new project update to workspace Slack channel. */
  slackProjectUpdateCreatedToWorkspace?: Maybe<Scalars['Boolean']>;
  /** Team which those settings apply to. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IntegrationsSettingsConnection = {
  __typename?: 'IntegrationsSettingsConnection';
  edges: Array<IntegrationsSettingsEdge>;
  nodes: Array<IntegrationsSettings>;
  pageInfo: PageInfo;
};

export type IntegrationsSettingsCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the project to create settings for. */
  projectId?: InputMaybe<Scalars['String']>;
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether to receive notification when an SLA has breached on Slack. */
  slackIssueSlaBreached?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when an SLA is at high risk */
  slackIssueSlaHighRisk?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created to team channels. */
  slackProjectUpdateCreatedToTeam?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created to workspace channel. */
  slackProjectUpdateCreatedToWorkspace?: InputMaybe<Scalars['Boolean']>;
  /** The identifier of the team to create settings for. */
  teamId?: InputMaybe<Scalars['String']>;
};

export type IntegrationsSettingsEdge = {
  __typename?: 'IntegrationsSettingsEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IntegrationsSettings;
};

export type IntegrationsSettingsPayload = {
  __typename?: 'IntegrationsSettingsPayload';
  /** The settings that were created or updated. */
  integrationsSettings: IntegrationsSettings;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IntegrationsSettingsUpdateInput = {
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether to receive notification when an SLA has breached on Slack. */
  slackIssueSlaBreached?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when an SLA is at high risk */
  slackIssueSlaHighRisk?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created to team channels. */
  slackProjectUpdateCreatedToTeam?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send a Slack message when a project update is created to workspace channel. */
  slackProjectUpdateCreatedToWorkspace?: InputMaybe<Scalars['Boolean']>;
};

/** Intercom specific settings. */
export type IntercomSettings = {
  __typename?: 'IntercomSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']>;
};

export type IntercomSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']>;
};

/** An issue. */
export type Issue = Node & {
  __typename?: 'Issue';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float'];
  /** The bot that created the issue, if applicable. */
  botActor?: Maybe<ActorBot>;
  /** Suggested branch name for the issue. */
  branchName: Scalars['String'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /**
   * [Internal] The issue's description as a Prosemirror document.
   * @deprecated Use description instead.
   */
  descriptionData?: Maybe<Scalars['JSON']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']>;
  /** [ALPHA] The external user who created the issue. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** The users favorite associated with this issue. */
  favorite?: Maybe<Favorite>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String'];
  /** Integration type that created this issue, if applicable. */
  integrationSourceType?: Maybe<IntegrationService>;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Id of the labels associated with this issue. */
  labelIds: Array<Scalars['String']>;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The last template that was applied to this issue. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The issue's unique number. */
  number: Scalars['Float'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Float'];
  /** Label for the priority. */
  priorityLabel: Scalars['String'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** The projectMilestone that the issue is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** [Internal] The time at which the issue's SLA will breach. */
  slaBreachesAt?: Maybe<Scalars['DateTime']>;
  /** [Internal] The time at which the issue's SLA began. */
  slaStartedAt?: Maybe<Scalars['DateTime']>;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float'];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue entered triage. */
  startedTriageAt?: Maybe<Scalars['DateTime']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The time at which the issue left triage. */
  triagedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Issue URL. */
  url: Scalars['String'];
};


/** An issue. */
export type IssueAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueHistoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueSubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type IssueArchivePayload = ArchivePayload & {
  __typename?: 'IssueArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueBatchPayload = {
  __typename?: 'IssueBatchPayload';
  /** The issues that were updated. */
  issues: Array<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Issue filtering options. */
export type IssueCollectionFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueCollectionFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Filters that needs to be matched by all issues. */
  every?: InputMaybe<IssueFilter>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueCollectionFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that needs to be matched by some issues. */
  some?: InputMaybe<IssueFilter>;
  /** Filters that the source must satisfy. */
  sourceMetadata?: InputMaybe<SourceMetadataComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueCreateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']>;
  /** Create issue as a user with the provided name. This option is only available to OAuth applications creating issues in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']>;
  /** The date when the issue was created (e.g. if importing from another system). Must be a date in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']>;
  /** [Internal] The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']>;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  displayIconUrl?: InputMaybe<Scalars['String']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']>>;
  /** The ID of the last template applied to the issue. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']>;
  /** Whether the passed sort order should be preserved */
  preserveSortOrderOnCreate?: InputMaybe<Scalars['Boolean']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: InputMaybe<Scalars['String']>;
  /** The comment the issue is referencing. */
  referenceCommentId?: InputMaybe<Scalars['String']>;
  /** [Internal] The timestamp at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: InputMaybe<Scalars['DateTime']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId: Scalars['String'];
  /** The identifier of a template the issue should be created from. If other values are provided in the input, they will override template values. */
  templateId?: InputMaybe<Scalars['String']>;
  /** The title of the issue. */
  title?: InputMaybe<Scalars['String']>;
};

/** [Internal] A draft issue. */
export type IssueDraft = Node & {
  __typename?: 'IssueDraft';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The user assigned to the draft. */
  assigneeId?: Maybe<Scalars['String']>;
  /** Serialized array of JSONs representing attachments. */
  attachments: Scalars['JSONObject'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the draft. */
  creator: User;
  /** The cycle associated with the draft. */
  cycleId?: Maybe<Scalars['String']>;
  /** The draft's description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /** [Internal] The draft's description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']>;
  /** The date at which the issue would be due. */
  dueDate?: Maybe<Scalars['TimelessDate']>;
  /** The estimate of the complexity of the draft. */
  estimate?: Maybe<Scalars['Float']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The parent draft of the draft. */
  parent?: Maybe<IssueDraft>;
  /** The parent issue of the draft. */
  parentIssue?: Maybe<Issue>;
  /** The priority of the draft. */
  priority: Scalars['Float'];
  /** Label for the priority. */
  priorityLabel: Scalars['String'];
  /** The project associated with the draft. */
  projectId?: Maybe<Scalars['String']>;
  /** The project milestone associated with the draft. */
  projectMilestoneId?: Maybe<Scalars['String']>;
  /** The workflow state associated with the draft. */
  stateId: Scalars['String'];
  /** The order of items in the sub-draft list. Only set if the draft has `parent` set. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** The team associated with the draft. */
  teamId: Scalars['String'];
  /** The draft's title. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Issue;
};

/** Issue filtering options. */
export type IssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the source must satisfy. */
  sourceMetadata?: InputMaybe<SourceMetadataComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueFilterSuggestionPayload = {
  __typename?: 'IssueFilterSuggestionPayload';
  /** The json filter that is suggested. */
  filter?: Maybe<Scalars['JSONObject']>;
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  __typename?: 'IssueHistory';
  /** The user who made these changes. If null, possibly means that the change made by an integration. */
  actor?: Maybe<User>;
  /** The id of user who made these changes. If null, possibly means that the change made by an integration. */
  actorId?: Maybe<Scalars['String']>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars['String']>>;
  addedLabels?: Maybe<Array<IssueLabel>>;
  /** Whether the issue is archived at the time of this history entry. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The linked attachment. */
  attachment?: Maybe<Attachment>;
  /** The id of linked attachment. */
  attachmentId?: Maybe<Scalars['String']>;
  /** Whether the issue was auto-archived. */
  autoArchived?: Maybe<Scalars['Boolean']>;
  /** Whether the issue was auto-closed. */
  autoClosed?: Maybe<Scalars['Boolean']>;
  /** The bot that performed the action */
  botActor?: Maybe<ActorBot>;
  /** [Internal] Serialized JSON representing changes for certain non-relational properties. */
  changes?: Maybe<Scalars['JSONObject']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user from whom the issue was re-assigned from. */
  fromAssignee?: Maybe<User>;
  /** The id of user from whom the issue was re-assigned from. */
  fromAssigneeId?: Maybe<Scalars['String']>;
  /** The previous cycle of the issue. */
  fromCycle?: Maybe<Cycle>;
  /** The id of previous cycle of the issue. */
  fromCycleId?: Maybe<Scalars['String']>;
  /** What the due date was changed from */
  fromDueDate?: Maybe<Scalars['TimelessDate']>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars['Float']>;
  /** The previous parent of the issue. */
  fromParent?: Maybe<Issue>;
  /** The id of previous parent of the issue. */
  fromParentId?: Maybe<Scalars['String']>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars['Float']>;
  /** The previous project of the issue. */
  fromProject?: Maybe<Project>;
  /** The id of previous project of the issue. */
  fromProjectId?: Maybe<Scalars['String']>;
  /** The previous workflow state of the issue. */
  fromState?: Maybe<WorkflowState>;
  /** The id of previous workflow state of the issue. */
  fromStateId?: Maybe<Scalars['String']>;
  /** The team from which the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** The id of team from which the issue was moved from. */
  fromTeamId?: Maybe<Scalars['String']>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that was changed. */
  issue: Issue;
  /** The import record. */
  issueImport?: Maybe<IssueImport>;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<IssueRelationHistoryPayload>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars['String']>>;
  removedLabels?: Maybe<Array<IssueLabel>>;
  /** The user to whom the issue was assigned to. */
  toAssignee?: Maybe<User>;
  /** The id of user to whom the issue was assigned to. */
  toAssigneeId?: Maybe<Scalars['String']>;
  /** The new project created from the issue. */
  toConvertedProject?: Maybe<Project>;
  /** The id of new project created from the issue. */
  toConvertedProjectId?: Maybe<Scalars['String']>;
  /** The new cycle of the issue. */
  toCycle?: Maybe<Cycle>;
  /** The id of new cycle of the issue. */
  toCycleId?: Maybe<Scalars['String']>;
  /** What the due date was changed to */
  toDueDate?: Maybe<Scalars['TimelessDate']>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars['Float']>;
  /** The new parent of the issue. */
  toParent?: Maybe<Issue>;
  /** The id of new parent of the issue. */
  toParentId?: Maybe<Scalars['String']>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars['Float']>;
  /** The new project of the issue. */
  toProject?: Maybe<Project>;
  /** The id of new project of the issue. */
  toProjectId?: Maybe<Scalars['String']>;
  /** The new workflow state of the issue. */
  toState?: Maybe<WorkflowState>;
  /** The id of new workflow state of the issue. */
  toStateId?: Maybe<Scalars['String']>;
  /** The team to which the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** The id of team to which the issue was moved to. */
  toTeamId?: Maybe<Scalars['String']>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars['String']>;
  /** Whether the issue was trashed or un-trashed. */
  trashed?: Maybe<Scalars['Boolean']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars['Boolean']>;
};

export type IssueHistoryConnection = {
  __typename?: 'IssueHistoryConnection';
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  __typename?: 'IssueHistoryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueHistory;
};

/** An import job for data from an external service */
export type IssueImport = Node & {
  __typename?: 'IssueImport';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The id for the user that started the job. */
  creatorId: Scalars['String'];
  /** File URL for the uploaded CSV for the import, if there is one. */
  csvFileUrl?: Maybe<Scalars['String']>;
  /** User readable error message, if one has occurred during the import. */
  error?: Maybe<Scalars['String']>;
  /** Error code and metadata, if one has occurred during the import */
  errorMetadata?: Maybe<Scalars['JSONObject']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The data mapping configuration for the import job. */
  mapping?: Maybe<Scalars['JSONObject']>;
  /** Current step progress in % (0-100). */
  progress?: Maybe<Scalars['Float']>;
  /** The service from which data will be imported. */
  service: Scalars['String'];
  /** The status for the import job. */
  status: Scalars['String'];
  /** New team's name in cases when teamId not set */
  teamName?: Maybe<Scalars['String']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IssueImportCheckPayload = {
  __typename?: 'IssueImportCheckPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueImportDeletePayload = {
  __typename?: 'IssueImportDeletePayload';
  /** The import job that was deleted. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Issue import mapping input */
export type IssueImportMappingInput = {
  /** The mapping configuration for epics */
  epics?: InputMaybe<Scalars['JSONObject']>;
  /** The mapping configuration for users */
  users?: InputMaybe<Scalars['JSONObject']>;
  /** The mapping configuration for workflow states */
  workflowStates?: InputMaybe<Scalars['JSONObject']>;
};

export type IssueImportPayload = {
  __typename?: 'IssueImportPayload';
  /** The import job that was created or updated. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueImportUpdateInput = {
  /** The mapping configuration for the import. */
  mapping: Scalars['JSONObject'];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  __typename?: 'IssueLabel';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Children of the label. */
  children: IssueLabelConnection;
  /** The label's color as a HEX string. */
  color: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** The label's description. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Whether this label is considered to be a group. */
  isGroup: Scalars['Boolean'];
  /** Issues associated with the label. */
  issues: IssueConnection;
  /** The label's name. */
  name: Scalars['String'];
  /** @deprecated Workspace labels are identified by their team being null. */
  organization: Organization;
  /** The parent label. */
  parent?: Maybe<IssueLabel>;
  /** The team that the label is associated with. If null, the label is associated with the global workspace. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** Labels that can be associated with issues. */
export type IssueLabelChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Issue label filtering options. */
export type IssueLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all issue labels. */
  every?: InputMaybe<IssueLabelFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelCollectionFilter>>;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: InputMaybe<IssueLabelFilter>;
  /** Filters that needs to be matched by some issue labels. */
  some?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<NullableTeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelConnection = {
  __typename?: 'IssueLabelConnection';
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelCreateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the label. */
  name: Scalars['String'];
  /** The identifier of the parent label. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The team associated with the label. If not given, the label will be associated with the entire workspace. */
  teamId?: InputMaybe<Scalars['String']>;
};

export type IssueLabelEdge = {
  __typename?: 'IssueLabelEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueLabel;
};

/** Issue label filtering options. */
export type IssueLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelFilter>>;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<NullableTeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelPayload = {
  __typename?: 'IssueLabelPayload';
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueLabelUpdateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the label. */
  name?: InputMaybe<Scalars['String']>;
  /** The identifier of the parent label. */
  parentId?: InputMaybe<Scalars['String']>;
};

/** An issue related notification */
export type IssueNotification = Entity & Node & Notification & {
  __typename?: 'IssueNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The comment related to the notification. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue related to the notification. */
  issue: Issue;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** The subscriptions related to the notification. */
  subscriptions?: Maybe<Array<NotificationSubscription>>;
  /** The team related to the notification. */
  team: Team;
  /** Notification type */
  type: Scalars['String'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that received the notification. */
  user: User;
};

export type IssuePayload = {
  __typename?: 'IssuePayload';
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssuePriorityValue = {
  __typename?: 'IssuePriorityValue';
  /** Priority's label. */
  label: Scalars['String'];
  /** Priority's number value. */
  priority: Scalars['Int'];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  __typename?: 'IssueRelation';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
  /** The relationship of the issue with the related issue. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IssueRelationConnection = {
  __typename?: 'IssueRelationConnection';
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars['String'];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars['String'];
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
};

export type IssueRelationEdge = {
  __typename?: 'IssueRelationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueRelation;
};

/** Issue relation history's payload */
export type IssueRelationHistoryPayload = {
  __typename?: 'IssueRelationHistoryPayload';
  /** The identifier of the related issue. */
  identifier: Scalars['String'];
  /** The type of the change. */
  type: Scalars['String'];
};

export type IssueRelationPayload = {
  __typename?: 'IssueRelationPayload';
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = 'blocks',
  Duplicate = 'duplicate',
  Related = 'related'
}

export type IssueRelationUpdateInput = {
  /** The identifier of the issue that is related to another issue. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The identifier of the related issue. */
  relatedIssueId?: InputMaybe<Scalars['String']>;
  /** The type of relation of the issue to the related issue. */
  type?: InputMaybe<Scalars['String']>;
};

export type IssueSearchPayload = {
  __typename?: 'IssueSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<IssueSearchResultEdge>;
  nodes: Array<IssueSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float'];
};

export type IssueSearchResult = Node & {
  __typename?: 'IssueSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float'];
  /** The bot that created the issue, if applicable. */
  botActor?: Maybe<ActorBot>;
  /** Suggested branch name for the issue. */
  branchName: Scalars['String'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /**
   * [Internal] The issue's description as a Prosemirror document.
   * @deprecated Use description instead.
   */
  descriptionData?: Maybe<Scalars['JSON']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']>;
  /** [ALPHA] The external user who created the issue. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** The users favorite associated with this issue. */
  favorite?: Maybe<Favorite>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String'];
  /** Integration type that created this issue, if applicable. */
  integrationSourceType?: Maybe<IntegrationService>;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Id of the labels associated with this issue. */
  labelIds: Array<Scalars['String']>;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The last template that was applied to this issue. */
  lastAppliedTemplate?: Maybe<Template>;
  /** Metadata related to search result */
  metadata: Scalars['JSONObject'];
  /** The issue's unique number. */
  number: Scalars['Float'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Float'];
  /** Label for the priority. */
  priorityLabel: Scalars['String'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** The projectMilestone that the issue is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** [Internal] The time at which the issue's SLA will breach. */
  slaBreachesAt?: Maybe<Scalars['DateTime']>;
  /** [Internal] The time at which the issue's SLA began. */
  slaStartedAt?: Maybe<Scalars['DateTime']>;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float'];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue entered triage. */
  startedTriageAt?: Maybe<Scalars['DateTime']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The time at which the issue left triage. */
  triagedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Issue URL. */
  url: Scalars['String'];
};


export type IssueSearchResultAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultHistoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultSubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type IssueSearchResultConnection = {
  __typename?: 'IssueSearchResultConnection';
  edges: Array<IssueSearchResultEdge>;
  nodes: Array<IssueSearchResult>;
  pageInfo: PageInfo;
};

export type IssueSearchResultEdge = {
  __typename?: 'IssueSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueSearchResult;
};

export type IssueUpdateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']>;
  /** The identifiers of the companies associated with this ticket. */
  companyIds?: InputMaybe<Array<Scalars['String']>>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']>>;
  /** The ID of the last template applied to the issue. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: InputMaybe<Scalars['String']>;
  /** [Internal] The timestamp at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: InputMaybe<Scalars['DateTime']>;
  /** The identifier of the user who snoozed the issue. */
  snoozedById?: InputMaybe<Scalars['String']>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The issue title. */
  title?: InputMaybe<Scalars['String']>;
  /** Whether the issue has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type JiraConfigurationInput = {
  /** The Jira personal access token. */
  accessToken: Scalars['String'];
  /** The Jira user's email address. */
  email: Scalars['String'];
  /** The Jira installation hostname. */
  hostname: Scalars['String'];
  /** The Jira project keys to scope the integration to. */
  project?: InputMaybe<Scalars['String']>;
};

/** Tuple for mapping Jira projects to Linear teams. */
export type JiraLinearMapping = {
  __typename?: 'JiraLinearMapping';
  /** Whether the sync for this mapping is bidirectional. */
  bidirectional?: Maybe<Scalars['Boolean']>;
  /** Whether this mapping is the default one for issue creation. */
  default?: Maybe<Scalars['Boolean']>;
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String'];
};

export type JiraLinearMappingInput = {
  /** Whether the sync for this mapping is bidirectional. */
  bidirectional?: InputMaybe<Scalars['Boolean']>;
  /** Whether this mapping is the default one for issue creation. */
  default?: InputMaybe<Scalars['Boolean']>;
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String'];
};

/** Jira personal specific settings. */
export type JiraPersonalSettings = {
  __typename?: 'JiraPersonalSettings';
  /** The name of the Jira site currently authorized through the integration. */
  siteName?: Maybe<Scalars['String']>;
};

export type JiraPersonalSettingsInput = {
  /** The name of the Jira site currently authorized through the integration. */
  siteName?: InputMaybe<Scalars['String']>;
};

/** Metadata about a Jira project. */
export type JiraProjectData = {
  __typename?: 'JiraProjectData';
  /** The Jira id for this project. */
  id: Scalars['String'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String'];
};

export type JiraProjectDataInput = {
  /** The Jira id for this project. */
  id: Scalars['String'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String'];
};

/** Jira specific settings. */
export type JiraSettings = {
  __typename?: 'JiraSettings';
  /** Whether this integration is for Jira Server or not. */
  isJiraServer?: Maybe<Scalars['Boolean']>;
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: Maybe<Array<JiraLinearMapping>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectData>;
};

export type JiraSettingsInput = {
  /** Whether this integration is for Jira Server or not. */
  isJiraServer?: InputMaybe<Scalars['Boolean']>;
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: InputMaybe<Array<JiraLinearMappingInput>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectDataInput>;
};

export type JiraUpdateInput = {
  /** The id of the integration to update */
  id: Scalars['String'];
  /** Whether to refresh Jira Projects for the integration */
  updateProjects?: InputMaybe<Scalars['Boolean']>;
};

export type JoinOrganizationInput = {
  /** An optional invite link for an organization. */
  inviteLink?: InputMaybe<Scalars['String']>;
  /** The identifier of the organization. */
  organizationId: Scalars['String'];
};

/** A label notification subscription. */
export type LabelNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'LabelNotificationSubscription';
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The label subscribed to. */
  label: IssueLabel;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates an integration api key for Airbyte to connect with Linear */
  airbyteIntegrationConnect: IntegrationPayload;
  /** Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** Deletes an API key. */
  apiKeyDelete: DeletePayload;
  /**
   * [DEPRECATED] Archives an issue attachment.
   * @deprecated This mutation is deprecated, please use `attachmentDelete` instead
   */
  attachmentArchive: AttachmentArchivePayload;
  /** Creates a new attachment, or updates existing if the same `url` and `issueId` is used. */
  attachmentCreate: AttachmentPayload;
  /** Deletes an issue attachment. */
  attachmentDelete: DeletePayload;
  /** Link an existing Discord message to an issue. */
  attachmentLinkDiscord: AttachmentPayload;
  /** Link an existing Front conversation to an issue. */
  attachmentLinkFront: FrontAttachmentPayload;
  /** Link a GitHub issue to a Linear issue. */
  attachmentLinkGitHubIssue: AttachmentPayload;
  /** Link a GitHub pull request to an issue. */
  attachmentLinkGitHubPR: AttachmentPayload;
  /** Link an existing GitLab MR to an issue. */
  attachmentLinkGitLabMR: AttachmentPayload;
  /** Link an existing Intercom conversation to an issue. */
  attachmentLinkIntercom: AttachmentPayload;
  /** Link an existing Jira issue to an issue. */
  attachmentLinkJiraIssue: AttachmentPayload;
  /** Link an existing Slack message to an issue. */
  attachmentLinkSlack: AttachmentPayload;
  /** Link any url to an issue. */
  attachmentLinkURL: AttachmentPayload;
  /** Link an existing Zendesk ticket to an issue. */
  attachmentLinkZendesk: AttachmentPayload;
  /** Unsyncs an existing synced Slack attachment. */
  attachmentUnsyncSlack: AttachmentPayload;
  /** Updates an existing issue attachment. */
  attachmentUpdate: AttachmentPayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: DeletePayload;
  /** Resolves a comment. */
  commentResolve: CommentPayload;
  /** Unresolves a comment. */
  commentUnresolve: CommentPayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** [INTERNAL] Saves sales pricing inquiry to Front. */
  contactSalesCreate: ContactPayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Create a notification to remind a user about a project update. */
  createProjectUpdateReminder: ProjectUpdateReminderPayload;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: DeletePayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** Archives a cycle. */
  cycleArchive: CycleArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Shifts all cycles starts by a certain number of weeks. */
  cycleShiftAll: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** Creates a new document. */
  documentCreate: DocumentPayload;
  /** Deletes a document. */
  documentDelete: DeletePayload;
  /** Updates a document. */
  documentUpdate: DocumentPayload;
  /** [INTERNAL] Subscribes the email to the newsletter. */
  emailSubscribe: EmailSubscribePayload;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Unsubscribes the user from one type of emails. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: DeletePayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: DeletePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Creates a new automation state. */
  gitAutomationStateCreate: GitAutomationStatePayload;
  /** Archives an automation state. */
  gitAutomationStateDelete: DeletePayload;
  /** Updates an existing state. */
  gitAutomationStateUpdate: GitAutomationStatePayload;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** XHR request payload to upload a file for import, directly to Linear's cloud storage. */
  importFileUpload: UploadPayload;
  /** Connect a Slack channel to Asks. */
  integrationAsksConnectChannel: AsksChannelConnectPayload;
  /** Deletes an integration. */
  integrationDelete: DeletePayload;
  /** Integrates the organization with Discord. */
  integrationDiscord: IntegrationPayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Integrates the organization with Front. */
  integrationFront: IntegrationPayload;
  /** Connect your GitHub account to Linear. */
  integrationGitHubPersonal: IntegrationPayload;
  /** Generates a webhook for the GitHub commit integration. */
  integrationGithubCommitCreate: GitHubCommitIntegrationPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: IntegrationPayload;
  /** [Internal] Connects the Google Calendar to the user to this Linear account via OAuth2. */
  integrationGoogleCalendarPersonalConnect: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Integrates the organization with Intercom. */
  integrationIntercom: IntegrationPayload;
  /** Disconnects the organization from Intercom. */
  integrationIntercomDelete: IntegrationPayload;
  /**
   * [DEPRECATED] Updates settings on the Intercom integration.
   * @deprecated This mutation is deprecated, please use `integrationSettingsUpdate` instead
   */
  integrationIntercomSettingsUpdate: IntegrationPayload;
  /** Connect your Jira account to Linear. */
  integrationJiraPersonal: IntegrationPayload;
  /** [INTERNAL] Updates a Jira Integration */
  integrationJiraUpdate: IntegrationPayload;
  /**
   * Enables Loom integration for the organization.
   * @deprecated Not available.
   */
  integrationLoom: IntegrationPayload;
  /** [INTERNAL] Integrates the organization with PagerDuty. */
  integrationPagerDutyConnect: IntegrationPayload;
  /** [INTERNAL] Refresh PagerDuty schedule mappings. */
  integrationPagerDutyRefreshScheduleMappings: IntegrationPayload;
  /** Requests a currently unavailable integration. */
  integrationRequest: IntegrationRequestPayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** [INTERNAL] Updates the integration. */
  integrationSettingsUpdate: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Integrates the organization with the Slack Asks app */
  integrationSlackAsks: IntegrationPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Slack integration for organization level project update notifications. */
  integrationSlackOrgProjectUpdatesPost: SlackChannelConnectPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: SlackChannelConnectPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: SlackChannelConnectPayload;
  /** Creates a new integrationTemplate join. */
  integrationTemplateCreate: IntegrationTemplatePayload;
  /** Deletes a integrationTemplate. */
  integrationTemplateDelete: DeletePayload;
  /** Updates the organization's Slack integration. */
  integrationUpdateSlack: IntegrationPayload;
  /** Integrates the organization with Zendesk. */
  integrationZendesk: IntegrationPayload;
  /** Creates new settings for one or more integrations. */
  integrationsSettingsCreate: IntegrationsSettingsPayload;
  /** Updates settings related to integrations for a project or a team. */
  integrationsSettingsUpdate: IntegrationsSettingsPayload;
  /** Adds a label to an issue. */
  issueAddLabel: IssuePayload;
  /** Archives an issue. */
  issueArchive: IssueArchivePayload;
  /** Updates multiple issues at once. */
  issueBatchUpdate: IssueBatchPayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Deletes (trashes) an issue. */
  issueDelete: IssueArchivePayload;
  /** [INTERNAL] Updates an issue description from the Front app to handle Front attachments correctly. */
  issueDescriptionUpdateFromFront: IssuePayload;
  /** Kicks off an Asana import job. */
  issueImportCreateAsana: IssueImportPayload;
  /** Kicks off a Jira import job from a CSV. */
  issueImportCreateCSVJira: IssueImportPayload;
  /** Kicks off a Shortcut (formerly Clubhouse) import job. */
  issueImportCreateClubhouse: IssueImportPayload;
  /** Kicks off a GitHub import job. */
  issueImportCreateGithub: IssueImportPayload;
  /** Kicks off a Jira import job. */
  issueImportCreateJira: IssueImportPayload;
  /** Deletes an import job. */
  issueImportDelete: IssueImportDeletePayload;
  /** Kicks off import processing. */
  issueImportProcess: IssueImportPayload;
  /** Updates the mapping for the issue import. */
  issueImportUpdate: IssueImportPayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Deletes an issue label. */
  issueLabelDelete: DeletePayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: DeletePayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Adds an issue reminder. Will cause a notification to be sent when the issue reminder time is reached. */
  issueReminder: IssuePayload;
  /** Removes a label from an issue. */
  issueRemoveLabel: IssuePayload;
  /** Subscribes a user to an issue. */
  issueSubscribe: IssuePayload;
  /** Unarchives an issue. */
  issueUnarchive: IssueArchivePayload;
  /** Unsubscribes a user from an issue. */
  issueUnsubscribe: IssuePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** [INTERNAL] Connects the organization with a Jira Personal Access Token. */
  jiraIntegrationConnect: IntegrationPayload;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Logout the client. */
  logout: LogoutResponse;
  /** Logout all of user's sessions including the active one. */
  logoutAllSessions: LogoutResponse;
  /** Logout all of user's sessions excluding the current one. */
  logoutOtherSessions: LogoutResponse;
  /** Logout an individual session with its ID. */
  logoutSession: LogoutResponse;
  /** Archives a notification. */
  notificationArchive: NotificationArchivePayload;
  /** Archives all of the user's past notifications for the associated entity. */
  notificationArchiveAll: NotificationBatchActionPayload;
  /** Marks all past notifications for the associated entity as read. */
  notificationMarkReadAll: NotificationBatchActionPayload;
  /** Marks all past notifications for the associated entity as unread. */
  notificationMarkUnreadAll: NotificationBatchActionPayload;
  /** Snoozes a notification and all past notifications for the associated entity. */
  notificationSnoozeAll: NotificationBatchActionPayload;
  /** Creates a new notification subscription for a cycle, custom view, label, project or team. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /**
   * Deletes a notification subscription reference.
   * @deprecated Update `notificationSubscription.active` to `false` instead.
   */
  notificationSubscriptionDelete: DeletePayload;
  /** Updates a notification subscription. */
  notificationSubscriptionUpdate: NotificationSubscriptionPayload;
  /** Unarchives a notification. */
  notificationUnarchive: NotificationArchivePayload;
  /** Unsnoozes a notification and all past notifications for the associated entity. */
  notificationUnsnoozeAll: NotificationBatchActionPayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** Cancels the deletion of an organization. Administrator privileges required. */
  organizationCancelDelete: OrganizationCancelDeletePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** [INTERNAL] Verifies a domain claim. */
  organizationDomainClaim: OrganizationDomainSimplePayload;
  /** [INTERNAL] Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: DeletePayload;
  /** [INTERNAL] Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: DeletePayload;
  /** Updates an organization invite. */
  organizationInviteUpdate: OrganizationInvitePayload;
  /** Starts a plus trial for the organization. Administrator privileges required. */
  organizationStartPlusTrial: OrganizationStartPlusTrialPayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /**
   * Archives a project.
   * @deprecated Deprecated in favor of projectDelete.
   */
  projectArchive: ProjectArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Deletes (trashes) a project. */
  projectDelete: ProjectArchivePayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: DeletePayload;
  /** Updates a project link. */
  projectLinkUpdate: ProjectLinkPayload;
  /** Creates a new project milestone. */
  projectMilestoneCreate: ProjectMilestonePayload;
  /** Deletes a project milestone. */
  projectMilestoneDelete: DeletePayload;
  /** Updates a project milestone. */
  projectMilestoneUpdate: ProjectMilestonePayload;
  /** Unarchives a project. */
  projectUnarchive: ProjectArchivePayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Creates a new project update. */
  projectUpdateCreate: ProjectUpdatePayload;
  /** Deletes a project update. */
  projectUpdateDelete: DeletePayload;
  /** Creates a new interaction on a project update. */
  projectUpdateInteractionCreate: ProjectUpdateInteractionPayload;
  /** Mark a project update as read. */
  projectUpdateMarkAsRead: ProjectUpdateWithInteractionPayload;
  /** Updates a project update. */
  projectUpdateUpdate: ProjectUpdatePayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: DeletePayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Re-send an organization invite. */
  resendOrganizationInvite: DeletePayload;
  /** Archives a roadmap. */
  roadmapArchive: RoadmapArchivePayload;
  /** Creates a new roadmap. */
  roadmapCreate: RoadmapPayload;
  /** Deletes a roadmap. */
  roadmapDelete: DeletePayload;
  /** Creates a new roadmapToProject join. */
  roadmapToProjectCreate: RoadmapToProjectPayload;
  /** Deletes a roadmapToProject. */
  roadmapToProjectDelete: DeletePayload;
  /** Updates a roadmapToProject. */
  roadmapToProjectUpdate: RoadmapToProjectPayload;
  /** Unarchives a roadmap. */
  roadmapUnarchive: RoadmapArchivePayload;
  /** Updates a roadmap. */
  roadmapUpdate: RoadmapPayload;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Deletes team's cycles data */
  teamCyclesDelete: TeamPayload;
  /** Deletes a team. */
  teamDelete: DeletePayload;
  /** Deletes a previously used team key. */
  teamKeyDelete: DeletePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: DeletePayload;
  /** Updates a team membership. */
  teamMembershipUpdate: TeamMembershipPayload;
  /** Unarchives a team and cancels deletion. */
  teamUnarchive: TeamArchivePayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: DeletePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Makes user a guest. Can only be called by an admin. */
  userDemoteMember: UserAdminPayload;
  /** Connects the Discord user to this Linear account via OAuth2. */
  userDiscordConnect: UserPayload;
  /** Disconnects the external user from this Linear account. */
  userExternalUserDisconnect: UserPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userPromoteMember: UserAdminPayload;
  /** [Deprecated] Updates a user's settings flag. */
  userSettingsFlagIncrement: UserSettingsFlagPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: DeletePayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: DeletePayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: WorkflowStateArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
};


export type MutationAirbyteIntegrationConnectArgs = {
  input: AirbyteConfigurationInput;
};


export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};


export type MutationApiKeyDeleteArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentArchiveArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentCreateArgs = {
  input: AttachmentCreateInput;
};


export type MutationAttachmentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentLinkDiscordArgs = {
  channelId: Scalars['String'];
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  messageId: Scalars['String'];
  url: Scalars['String'];
};


export type MutationAttachmentLinkFrontArgs = {
  conversationId: Scalars['String'];
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
};


export type MutationAttachmentLinkGitHubIssueArgs = {
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  url: Scalars['String'];
};


export type MutationAttachmentLinkGitHubPrArgs = {
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  number?: InputMaybe<Scalars['Float']>;
  owner?: InputMaybe<Scalars['String']>;
  repo?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


export type MutationAttachmentLinkGitLabMrArgs = {
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  number: Scalars['Float'];
  projectPathWithNamespace: Scalars['String'];
  url: Scalars['String'];
};


export type MutationAttachmentLinkIntercomArgs = {
  conversationId: Scalars['String'];
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
};


export type MutationAttachmentLinkJiraIssueArgs = {
  issueId: Scalars['String'];
  jiraIssueId: Scalars['String'];
};


export type MutationAttachmentLinkSlackArgs = {
  channel: Scalars['String'];
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  latest: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  ts?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


export type MutationAttachmentLinkUrlArgs = {
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


export type MutationAttachmentLinkZendeskArgs = {
  createAsUser?: InputMaybe<Scalars['String']>;
  displayIconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issueId: Scalars['String'];
  ticketId: Scalars['String'];
};


export type MutationAttachmentUnsyncSlackArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentUpdateArgs = {
  id: Scalars['String'];
  input: AttachmentUpdateInput;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationCommentResolveArgs = {
  id: Scalars['String'];
  resolvingCommentId?: InputMaybe<Scalars['String']>;
};


export type MutationCommentUnresolveArgs = {
  id: Scalars['String'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['String'];
  input: CommentUpdateInput;
};


export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};


export type MutationContactSalesCreateArgs = {
  input: ContactSalesCreateInput;
};


export type MutationCreateCsvExportReportArgs = {
  includePrivateTeamIds?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationCreateOrganizationFromOnboardingArgs = {
  input: CreateOrganizationInput;
  survey?: InputMaybe<OnboardingCustomerSurvey>;
};


export type MutationCreateProjectUpdateReminderArgs = {
  projectId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};


export type MutationCustomViewDeleteArgs = {
  id: Scalars['String'];
};


export type MutationCustomViewUpdateArgs = {
  id: Scalars['String'];
  input: CustomViewUpdateInput;
};


export type MutationCycleArchiveArgs = {
  id: Scalars['String'];
};


export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};


export type MutationCycleShiftAllArgs = {
  input: CycleShiftAllInput;
};


export type MutationCycleUpdateArgs = {
  id: Scalars['String'];
  input: CycleUpdateInput;
};


export type MutationDocumentCreateArgs = {
  input: DocumentCreateInput;
};


export type MutationDocumentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationDocumentUpdateArgs = {
  id: Scalars['String'];
  input: DocumentUpdateInput;
};


export type MutationEmailSubscribeArgs = {
  input: EmailSubscribeInput;
};


export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};


export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};


export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};


export type MutationEmojiDeleteArgs = {
  id: Scalars['String'];
};


export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};


export type MutationFavoriteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationFavoriteUpdateArgs = {
  id: Scalars['String'];
  input: FavoriteUpdateInput;
};


export type MutationFileUploadArgs = {
  contentType: Scalars['String'];
  filename: Scalars['String'];
  makePublic?: InputMaybe<Scalars['Boolean']>;
  metaData?: InputMaybe<Scalars['JSON']>;
  size: Scalars['Int'];
};


export type MutationGitAutomationStateCreateArgs = {
  input: GitAutomationStateCreateInput;
};


export type MutationGitAutomationStateDeleteArgs = {
  id: Scalars['String'];
};


export type MutationGitAutomationStateUpdateArgs = {
  id: Scalars['String'];
  input: GitAutomationStateUpdateInput;
};


export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};


export type MutationImageUploadFromUrlArgs = {
  url: Scalars['String'];
};


export type MutationImportFileUploadArgs = {
  contentType: Scalars['String'];
  filename: Scalars['String'];
  metaData?: InputMaybe<Scalars['JSON']>;
  size: Scalars['Int'];
};


export type MutationIntegrationAsksConnectChannelArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIntegrationDiscordArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationFigmaArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationFrontArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationGitHubPersonalArgs = {
  code: Scalars['String'];
};


export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars['String'];
};


export type MutationIntegrationGitlabConnectArgs = {
  accessToken: Scalars['String'];
  gitlabUrl: Scalars['String'];
};


export type MutationIntegrationGoogleCalendarPersonalConnectArgs = {
  code: Scalars['String'];
};


export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars['String'];
};


export type MutationIntegrationIntercomArgs = {
  code: Scalars['String'];
  domainUrl?: InputMaybe<Scalars['String']>;
  redirectUri: Scalars['String'];
};


export type MutationIntegrationIntercomSettingsUpdateArgs = {
  input: IntercomSettingsInput;
};


export type MutationIntegrationJiraPersonalArgs = {
  accessToken?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};


export type MutationIntegrationJiraUpdateArgs = {
  input: JiraUpdateInput;
};


export type MutationIntegrationPagerDutyConnectArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationRequestArgs = {
  input: IntegrationRequestInput;
};


export type MutationIntegrationSentryConnectArgs = {
  code: Scalars['String'];
  installationId: Scalars['String'];
  organizationSlug: Scalars['String'];
};


export type MutationIntegrationSettingsUpdateArgs = {
  id: Scalars['String'];
  input: IntegrationSettingsInput;
};


export type MutationIntegrationSlackArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']>;
};


export type MutationIntegrationSlackAsksArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationSlackImportEmojisArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationSlackOrgProjectUpdatesPostArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationSlackPersonalArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationSlackPostArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};


export type MutationIntegrationSlackProjectPostArgs = {
  code: Scalars['String'];
  projectId: Scalars['String'];
  redirectUri: Scalars['String'];
  service: Scalars['String'];
};


export type MutationIntegrationTemplateCreateArgs = {
  input: IntegrationTemplateCreateInput;
};


export type MutationIntegrationTemplateDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIntegrationUpdateSlackArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationZendeskArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  scope: Scalars['String'];
  subdomain: Scalars['String'];
};


export type MutationIntegrationsSettingsCreateArgs = {
  input: IntegrationsSettingsCreateInput;
};


export type MutationIntegrationsSettingsUpdateArgs = {
  id: Scalars['String'];
  input: IntegrationsSettingsUpdateInput;
};


export type MutationIssueAddLabelArgs = {
  id: Scalars['String'];
  labelId: Scalars['String'];
};


export type MutationIssueArchiveArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationIssueBatchUpdateArgs = {
  ids: Array<Scalars['UUID']>;
  input: IssueUpdateInput;
};


export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};


export type MutationIssueDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIssueDescriptionUpdateFromFrontArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
};


export type MutationIssueImportCreateAsanaArgs = {
  asanaTeamName: Scalars['String'];
  asanaToken: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  teamName?: InputMaybe<Scalars['String']>;
};


export type MutationIssueImportCreateCsvJiraArgs = {
  csvUrl: Scalars['String'];
  jiraEmail?: InputMaybe<Scalars['String']>;
  jiraHostname?: InputMaybe<Scalars['String']>;
  jiraToken?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  teamName?: InputMaybe<Scalars['String']>;
};


export type MutationIssueImportCreateClubhouseArgs = {
  clubhouseGroupName: Scalars['String'];
  clubhouseToken: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  teamName?: InputMaybe<Scalars['String']>;
};


export type MutationIssueImportCreateGithubArgs = {
  githubRepoName: Scalars['String'];
  githubRepoOwner: Scalars['String'];
  githubShouldImportOrgProjects?: InputMaybe<Scalars['Boolean']>;
  githubToken: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  teamName?: InputMaybe<Scalars['String']>;
};


export type MutationIssueImportCreateJiraArgs = {
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  jiraEmail: Scalars['String'];
  jiraHostname: Scalars['String'];
  jiraProject: Scalars['String'];
  jiraToken: Scalars['String'];
  organizationId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  teamName?: InputMaybe<Scalars['String']>;
};


export type MutationIssueImportDeleteArgs = {
  issueImportId: Scalars['String'];
};


export type MutationIssueImportProcessArgs = {
  issueImportId: Scalars['String'];
  mapping: Scalars['JSONObject'];
};


export type MutationIssueImportUpdateArgs = {
  id: Scalars['String'];
  input: IssueImportUpdateInput;
};


export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
  replaceTeamLabels?: InputMaybe<Scalars['Boolean']>;
};


export type MutationIssueLabelDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIssueLabelUpdateArgs = {
  id: Scalars['String'];
  input: IssueLabelUpdateInput;
};


export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
};


export type MutationIssueRelationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIssueRelationUpdateArgs = {
  id: Scalars['String'];
  input: IssueRelationUpdateInput;
};


export type MutationIssueReminderArgs = {
  id: Scalars['String'];
  reminderAt: Scalars['DateTime'];
};


export type MutationIssueRemoveLabelArgs = {
  id: Scalars['String'];
  labelId: Scalars['String'];
};


export type MutationIssueSubscribeArgs = {
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationIssueUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationIssueUnsubscribeArgs = {
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationIssueUpdateArgs = {
  id: Scalars['String'];
  input: IssueUpdateInput;
};


export type MutationJiraIntegrationConnectArgs = {
  input: JiraConfigurationInput;
};


export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};


export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars['String'];
};


export type MutationLogoutSessionArgs = {
  sessionId: Scalars['String'];
};


export type MutationNotificationArchiveArgs = {
  id: Scalars['String'];
};


export type MutationNotificationArchiveAllArgs = {
  input: NotificationEntityInput;
};


export type MutationNotificationMarkReadAllArgs = {
  input: NotificationEntityInput;
  readAt: Scalars['DateTime'];
};


export type MutationNotificationMarkUnreadAllArgs = {
  input: NotificationEntityInput;
};


export type MutationNotificationSnoozeAllArgs = {
  input: NotificationEntityInput;
  snoozedUntilAt: Scalars['DateTime'];
};


export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};


export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationNotificationSubscriptionUpdateArgs = {
  id: Scalars['String'];
  input: NotificationSubscriptionUpdateInput;
};


export type MutationNotificationUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationNotificationUnsnoozeAllArgs = {
  input: NotificationEntityInput;
  unsnoozedAt: Scalars['DateTime'];
};


export type MutationNotificationUpdateArgs = {
  id: Scalars['String'];
  input: NotificationUpdateInput;
};


export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};


export type MutationOrganizationDomainClaimArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
  triggerEmailVerification?: InputMaybe<Scalars['Boolean']>;
};


export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};


export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};


export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationInviteUpdateArgs = {
  id: Scalars['String'];
  input: OrganizationInviteUpdateInput;
};


export type MutationOrganizationUpdateArgs = {
  input: OrganizationUpdateInput;
};


export type MutationProjectArchiveArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationProjectCreateArgs = {
  connectSlackChannel?: InputMaybe<Scalars['Boolean']>;
  input: ProjectCreateInput;
};


export type MutationProjectDeleteArgs = {
  id: Scalars['String'];
};


export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};


export type MutationProjectLinkDeleteArgs = {
  id: Scalars['String'];
};


export type MutationProjectLinkUpdateArgs = {
  id: Scalars['String'];
  input: ProjectLinkUpdateInput;
};


export type MutationProjectMilestoneCreateArgs = {
  input: ProjectMilestoneCreateInput;
};


export type MutationProjectMilestoneDeleteArgs = {
  id: Scalars['String'];
};


export type MutationProjectMilestoneUpdateArgs = {
  id: Scalars['String'];
  input: ProjectMilestoneUpdateInput;
};


export type MutationProjectUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationProjectUpdateArgs = {
  id: Scalars['String'];
  input: ProjectUpdateInput;
};


export type MutationProjectUpdateCreateArgs = {
  input: ProjectUpdateCreateInput;
};


export type MutationProjectUpdateDeleteArgs = {
  id: Scalars['String'];
};


export type MutationProjectUpdateInteractionCreateArgs = {
  input: ProjectUpdateInteractionCreateInput;
};


export type MutationProjectUpdateMarkAsReadArgs = {
  id: Scalars['String'];
};


export type MutationProjectUpdateUpdateArgs = {
  id: Scalars['String'];
  input: ProjectUpdateUpdateInput;
};


export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};


export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};


export type MutationReactionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars['String'];
};


export type MutationResendOrganizationInviteArgs = {
  id: Scalars['String'];
};


export type MutationRoadmapArchiveArgs = {
  id: Scalars['String'];
};


export type MutationRoadmapCreateArgs = {
  input: RoadmapCreateInput;
};


export type MutationRoadmapDeleteArgs = {
  id: Scalars['String'];
};


export type MutationRoadmapToProjectCreateArgs = {
  input: RoadmapToProjectCreateInput;
};


export type MutationRoadmapToProjectDeleteArgs = {
  id: Scalars['String'];
};


export type MutationRoadmapToProjectUpdateArgs = {
  id: Scalars['String'];
  input: RoadmapToProjectUpdateInput;
};


export type MutationRoadmapUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationRoadmapUpdateArgs = {
  id: Scalars['String'];
  input: RoadmapUpdateInput;
};


export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: InputMaybe<Scalars['String']>;
  input: TeamCreateInput;
};


export type MutationTeamCyclesDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamKeyDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};


export type MutationTeamMembershipDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamMembershipUpdateArgs = {
  id: Scalars['String'];
  input: TeamMembershipUpdateInput;
};


export type MutationTeamUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationTeamUpdateArgs = {
  id: Scalars['String'];
  input: TeamUpdateInput;
};


export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTemplateUpdateArgs = {
  id: Scalars['String'];
  input: TemplateUpdateInput;
};


export type MutationUserDemoteAdminArgs = {
  id: Scalars['String'];
};


export type MutationUserDemoteMemberArgs = {
  id: Scalars['String'];
};


export type MutationUserDiscordConnectArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationUserExternalUserDisconnectArgs = {
  service: Scalars['String'];
};


export type MutationUserFlagUpdateArgs = {
  flag: UserFlagType;
  operation: UserFlagUpdateOperation;
};


export type MutationUserPromoteAdminArgs = {
  id: Scalars['String'];
};


export type MutationUserPromoteMemberArgs = {
  id: Scalars['String'];
};


export type MutationUserSettingsFlagIncrementArgs = {
  flag: Scalars['String'];
};


export type MutationUserSettingsFlagsResetArgs = {
  flags?: InputMaybe<Array<UserFlagType>>;
};


export type MutationUserSettingsUpdateArgs = {
  id: Scalars['String'];
  input: UserSettingsUpdateInput;
};


export type MutationUserSuspendArgs = {
  id: Scalars['String'];
};


export type MutationUserUnsuspendArgs = {
  id: Scalars['String'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['String'];
  input: UserUpdateInput;
};


export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};


export type MutationViewPreferencesDeleteArgs = {
  id: Scalars['String'];
};


export type MutationViewPreferencesUpdateArgs = {
  id: Scalars['String'];
  input: ViewPreferencesUpdateInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['String'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['String'];
  input: WebhookUpdateInput;
};


export type MutationWorkflowStateArchiveArgs = {
  id: Scalars['String'];
};


export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};


export type MutationWorkflowStateUpdateArgs = {
  id: Scalars['String'];
  input: WorkflowStateUpdateInput;
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
};

/** A notification sent to a user. */
export type Notification = {
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** Notification type */
  type: Scalars['String'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that received the notification. */
  user: User;
};

/** A generic payload return from entity archive mutations. */
export type NotificationArchivePayload = ArchivePayload & {
  __typename?: 'NotificationArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Notification>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type NotificationBatchActionPayload = {
  __typename?: 'NotificationBatchActionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notifications that were updated. */
  notifications: Array<Notification>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Notification;
};

/** Describes the type and id of the entity to target for notifications. */
export type NotificationEntityInput = {
  /** The id of the issue related to the notification. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The id of the OAuth client approval related to the notification. */
  oauthClientApprovalId?: InputMaybe<Scalars['String']>;
  /** The id of the project related to the notification. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The id of the project update related to the notification. */
  projectUpdateId?: InputMaybe<Scalars['String']>;
};

export type NotificationPayload = {
  __typename?: 'NotificationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = {
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type NotificationSubscriptionConnection = {
  __typename?: 'NotificationSubscriptionConnection';
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionCreateInput = {
  /** Whether the subscription is active. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: InputMaybe<ContextViewType>;
  /** The identifier of the custom view to subscribe to. */
  customViewId?: InputMaybe<Scalars['String']>;
  /** The identifier of the cycle to subscribe to. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the label to subscribe to. */
  labelId?: InputMaybe<Scalars['String']>;
  /** The types of notifications of the subscription. */
  notificationSubscriptionTypes?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier of the project to subscribe to. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The identifier of the team to subscribe to. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: InputMaybe<UserContextViewType>;
  /** The identifier of the user to subscribe to. */
  userId?: InputMaybe<Scalars['String']>;
};

export type NotificationSubscriptionEdge = {
  __typename?: 'NotificationSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: NotificationSubscription;
};

export type NotificationSubscriptionPayload = {
  __typename?: 'NotificationSubscriptionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type NotificationSubscriptionUpdateInput = {
  /** Whether the subscription is active. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** The types of notifications of the subscription. */
  notificationSubscriptionTypes?: InputMaybe<Array<Scalars['String']>>;
};

export type NotificationUpdateInput = {
  /** The id of the project update related to the notification. */
  projectUpdateId?: InputMaybe<Scalars['String']>;
  /** The time when notification was marked as read. */
  readAt?: InputMaybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
};

/** Notion specific settings. */
export type NotionSettings = {
  __typename?: 'NotionSettings';
  /** The ID of the Notion workspace being connected. */
  workspaceId: Scalars['String'];
  /** The name of the Notion workspace being connected. */
  workspaceName: Scalars['String'];
};

export type NotionSettingsInput = {
  /** The ID of the Notion workspace being connected. */
  workspaceId: Scalars['String'];
  /** The name of the Notion workspace being connected. */
  workspaceName: Scalars['String'];
};

/** Cycle filtering options. */
export type NullableCycleFilter = {
  /** Compound filters, one of which need to be matched by the cycle. */
  and?: InputMaybe<Array<NullableCycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the filtering active cycle. */
  isActive?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering future cycles. */
  isFuture?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering next cycle. */
  isNext?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering past cycles. */
  isPast?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: InputMaybe<BooleanComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<NullableCycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional dates. */
export type NullableDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTime']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** Document content filtering options. */
export type NullableDocumentContentFilter = {
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Issue filtering options. */
export type NullableIssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<NullableIssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<NullableIssueFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the source must satisfy. */
  sourceMetadata?: InputMaybe<SourceMetadataComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional numbers. */
export type NullableNumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** Project filtering options. */
export type NullableProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<NullableProjectFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<NullableProjectFilter>>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the projects content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Project milestone filtering options. */
export type NullableProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: InputMaybe<Array<NullableProjectMilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: InputMaybe<Array<NullableProjectMilestoneFilter>>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional strings. */
export type NullableStringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']>;
};

/** Team filtering options. */
export type NullableTeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<NullableTeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<NullableTeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Template filtering options. */
export type NullableTemplateFilter = {
  /** Compound filters, all of which need to be matched by the template. */
  and?: InputMaybe<Array<NullableTemplateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the template's name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the template. */
  or?: InputMaybe<Array<NullableTemplateFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type NullableTimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDate']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDate']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDate']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDate']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** User filtering options. */
export type NullableUserFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<NullableUserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<NullableUserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for numbers. */
export type NumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** The different requests statuses possible for an OAuth client approval request */
export enum OAuthClientApprovalStatus {
  Approved = 'approved',
  Denied = 'denied',
  Requested = 'requested'
}

/** OAuth2 client application */
export type OauthClient = Node & {
  __typename?: 'OauthClient';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the OAuth application. */
  creator: User;
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer. */
  developerUrl: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** OAuth application's client name. */
  name: Scalars['String'];
  /** The organization that the OAuth application is associated with. */
  organization: Organization;
  /** Whether the OAuth application can be installed in other organizations. */
  publicEnabled: Scalars['Boolean'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The resource types to request when creating new webhooks. */
  webhookResourceTypes: Array<Scalars['String']>;
  /** Webhook secret token for verifying the origin on the recipient side. */
  webhookSecret?: Maybe<Scalars['String']>;
  /** Webhook URL */
  webhookUrl?: Maybe<Scalars['String']>;
};

/** Request to install OAuth clients on organizations and the response to the request. */
export type OauthClientApproval = Node & {
  __typename?: 'OauthClientApproval';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The reason the request for the OAuth client approval was denied. */
  denyReason?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The uuid of the OAuth client being requested for installation. */
  oauthClientId: Scalars['String'];
  /** The reason the person wants to install this OAuth client. */
  requestReason?: Maybe<Scalars['String']>;
  /** The person who requested installing the OAuth client. */
  requesterId: Scalars['String'];
  /** The person who responded to the request to install the OAuth client. */
  responderId?: Maybe<Scalars['String']>;
  /** The scopes the app has requested. */
  scopes: Array<Scalars['String']>;
  /** The status for the OAuth client approval request. */
  status: OAuthClientApprovalStatus;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

/** An oauth client approval related notification */
export type OauthClientApprovalNotification = Entity & Node & Notification & {
  __typename?: 'OauthClientApprovalNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The OAuth client approval request related to the notification. */
  oauthClientApproval: OauthClientApproval;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** Notification type */
  type: Scalars['String'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that received the notification. */
  user: User;
};

export type OauthClientConnection = {
  __typename?: 'OauthClientConnection';
  edges: Array<OauthClientEdge>;
  nodes: Array<OauthClient>;
  pageInfo: PageInfo;
};

export type OauthClientEdge = {
  __typename?: 'OauthClientEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: OauthClient;
};

export type OauthToken = {
  __typename?: 'OauthToken';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type OnboardingCustomerSurvey = {
  companyRole?: InputMaybe<Scalars['String']>;
  companySize?: InputMaybe<Scalars['String']>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  __typename?: 'Organization';
  /** Whether member users are allowed to send invites */
  allowMembersToInvite?: Maybe<Scalars['Boolean']>;
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars['String']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars['Int'];
  /** The time at which deletion of the organization was requested. */
  deletionRequestedAt?: Maybe<Scalars['DateTime']>;
  /** The month at which the fiscal year starts. Defaults to January (0). */
  fiscalYearStartMonth: Scalars['Float'];
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars['String']>;
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars['Boolean'];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** Labels associated with the organization. */
  labels: IssueLabelConnection;
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']>;
  /** The organization's name. */
  name: Scalars['String'];
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars['Float'];
  /** Previously used URL keys for the organization (last 3 are kept and redirected). */
  previousUrlKeys: Array<Scalars['String']>;
  /** The day at which to prompt for project updates. */
  projectUpdateRemindersDay: Day;
  /** The hour at which to prompt for project updates. */
  projectUpdateRemindersHour: Scalars['Float'];
  /** The frequency at which to prompt for project updates. */
  projectUpdatesReminderFrequency: ProjectUpdateReminderFrequency;
  /** The feature release channel the organization belongs to. */
  releaseChannel: ReleaseChannel;
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars['Boolean'];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean'];
  /** [INTERNAL] SAML settings */
  samlSettings?: Maybe<Scalars['JSONObject']>;
  /** Whether SCIM provisioning is enabled for organization. */
  scimEnabled: Scalars['Boolean'];
  /** Which day count to use for SLA calculations */
  slaDayCount: SlaDayCountType;
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<PaidSubscription>;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /** Templates associated with the organization. */
  templates: TemplateConnection;
  /** The time at which the trial of the plus plan will end. */
  trialEndsAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String'];
  /** Number of active users in the organization. */
  userCount: Scalars['Int'];
  /** Users associated with the organization. */
  users: UserConnection;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type OrganizationAcceptedOrExpiredInviteDetailsPayload = {
  __typename?: 'OrganizationAcceptedOrExpiredInviteDetailsPayload';
  /** The status of the invite */
  status: OrganizationInviteStatus;
};

export type OrganizationCancelDeletePayload = {
  __typename?: 'OrganizationCancelDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDeletePayload = {
  __typename?: 'OrganizationDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  __typename?: 'OrganizationDomain';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** What type of auth is the domain used for */
  authType: OrganizationDomainAuthType;
  /** Whether the domains was claimed by the organization through DNS verification. */
  claimed?: Maybe<Scalars['Boolean']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Domain name */
  name: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** E-mail used to verify this domain */
  verificationEmail?: Maybe<Scalars['String']>;
  /** Is this domain verified */
  verified: Scalars['Boolean'];
};

/** What type of auth is the domain used for. */
export enum OrganizationDomainAuthType {
  General = 'general',
  Saml = 'saml'
}

/** [INTERNAL] Domain claim request response. */
export type OrganizationDomainClaimPayload = {
  __typename?: 'OrganizationDomainClaimPayload';
  /** String to put into DNS for verification. */
  verificationString: Scalars['String'];
};

export type OrganizationDomainCreateInput = {
  /** The authentication type this domain is for. */
  authType?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The domain name to add. */
  name: Scalars['String'];
  /** The email address to which to send the verification code. */
  verificationEmail?: InputMaybe<Scalars['String']>;
};

/** [INTERNAL] Organization domain operation response. */
export type OrganizationDomainPayload = {
  __typename?: 'OrganizationDomainPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** [INTERNAL] Organization domain operation response. */
export type OrganizationDomainSimplePayload = {
  __typename?: 'OrganizationDomainSimplePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDomainVerificationInput = {
  /** The identifier in UUID v4 format of the domain being verified. */
  organizationDomainId: Scalars['String'];
  /** The verification code sent via email. */
  verificationCode: Scalars['String'];
};

export type OrganizationExistsPayload = {
  __typename?: 'OrganizationExistsPayload';
  /** Whether the organization exists. */
  exists: Scalars['Boolean'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  __typename?: 'OrganizationInvite';
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted */
  acceptedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The invitees email address. */
  email: Scalars['String'];
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire */
  expiresAt?: Maybe<Scalars['DateTime']>;
  /** The invite was sent to external address. */
  external: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The user who created the invitation. */
  inviter: User;
  /** Extra metadata associated with the organization invite. */
  metadata: Scalars['JSONObject'];
  /** The organization that the invite is associated with. */
  organization: Organization;
  /** The user role that the invitee will receive upon accepting the invite. */
  role: UserRoleType;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type OrganizationInviteConnection = {
  __typename?: 'OrganizationInviteConnection';
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteCreateInput = {
  /** The email of the invitee. */
  email: Scalars['String'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The message to send to the invitee. */
  message?: InputMaybe<Scalars['String']>;
  /** [INTERNAL] Optional metadata about the invite */
  metadata?: InputMaybe<Scalars['JSONObject']>;
  /** What user role the invite should grant. */
  role?: InputMaybe<UserRoleType>;
  /** The teams that the user has been invited to. */
  teamIds?: InputMaybe<Array<Scalars['String']>>;
};

export type OrganizationInviteDetailsPayload = OrganizationAcceptedOrExpiredInviteDetailsPayload | OrganizationInviteFullDetailsPayload;

export type OrganizationInviteEdge = {
  __typename?: 'OrganizationInviteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: OrganizationInvite;
};

export type OrganizationInviteFullDetailsPayload = {
  __typename?: 'OrganizationInviteFullDetailsPayload';
  /** Whether the invite has already been accepted. */
  accepted: Scalars['Boolean'];
  /** When the invite was created. */
  createdAt: Scalars['DateTime'];
  /** The email of the invitee */
  email: Scalars['String'];
  /** Whether the invite has expired. */
  expired: Scalars['Boolean'];
  /** The name of the inviter */
  inviter: Scalars['String'];
  /** ID of the workspace the invite is for. */
  organizationId: Scalars['String'];
  /** URL of the workspace logo the invite is for. */
  organizationLogoUrl?: Maybe<Scalars['String']>;
  /** Name of the workspace the invite is for. */
  organizationName: Scalars['String'];
  /** What user role the invite should grant. */
  role: UserRoleType;
  /** The status of the invite */
  status: OrganizationInviteStatus;
};

export type OrganizationInvitePayload = {
  __typename?: 'OrganizationInvitePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The different statuses possible for an organization invite. */
export enum OrganizationInviteStatus {
  Accepted = 'accepted',
  Expired = 'expired',
  Pending = 'pending'
}

export type OrganizationInviteUpdateInput = {
  /** The teams that the user has been invited to. */
  teamIds: Array<Scalars['String']>;
};

export type OrganizationPayload = {
  __typename?: 'OrganizationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationStartPlusTrialPayload = {
  __typename?: 'OrganizationStartPlusTrialPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationUpdateInput = {
  /** Whether member users are allowed to send invites. */
  allowMembersToInvite?: InputMaybe<Scalars['Boolean']>;
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: InputMaybe<Array<Scalars['String']>>;
  /** The month at which the fiscal year starts. */
  fiscalYearStartMonth?: InputMaybe<Scalars['Float']>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: InputMaybe<Scalars['String']>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Linear Preview feature flags */
  linearPreviewFlags?: InputMaybe<Scalars['JSONObject']>;
  /** The logo of the organization. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** The name of the organization. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether the organization has opted for having to approve all OAuth applications for install. */
  oauthAppReview?: InputMaybe<Scalars['Boolean']>;
  /** The day at which project updates are sent. */
  projectUpdateRemindersDay?: InputMaybe<Day>;
  /** The hour at which project updates are sent. */
  projectUpdateRemindersHour?: InputMaybe<Scalars['Float']>;
  /** The frequency at which project updates are sent. */
  projectUpdatesReminderFrequency?: InputMaybe<ProjectUpdateReminderFrequency>;
  /** Whether the organization has opted for reduced customer support attachment information. */
  reducedPersonalInformation?: InputMaybe<Scalars['Boolean']>;
  /** Whether the organization is using roadmap. */
  roadmapEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Which day count to use for SLA calculation. */
  slaDayCount?: InputMaybe<SlaDayCountType>;
  /** Internal. Whether SLAs have been enabled for the organization. */
  slaEnabled?: InputMaybe<Scalars['Boolean']>;
  /** The URL key of the organization. */
  urlKey?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars['Boolean'];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PagerDutyInput = {
  /** Metadata about a PagerDuty schedule. */
  scheduleMapping: Array<PagerDutyScheduleInfoInput>;
};

/** Metadata about a PagerDuty schedule. */
export type PagerDutyScheduleInfo = {
  __typename?: 'PagerDutyScheduleInfo';
  /** The PagerDuty schedule id. */
  scheduleId: Scalars['String'];
  /** The PagerDuty schedule name. */
  scheduleName: Scalars['String'];
  /** The URL of the schedule in PagerDuty's web app. */
  url: Scalars['String'];
};

export type PagerDutyScheduleInfoInput = {
  /** The PagerDuty schedule id. */
  scheduleId: Scalars['String'];
  /** The PagerDuty schedule name. */
  scheduleName: Scalars['String'];
  /** The URL of the schedule in PagerDuty's web app. */
  url: Scalars['String'];
};

/** PagerDuty specific settings. */
export type PagerDutySettings = {
  __typename?: 'PagerDutySettings';
  /** Metadata about a PagerDuty schedule. */
  scheduleMapping: Array<PagerDutyScheduleInfo>;
};

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** The paid subscription of an organization. */
export type PaidSubscription = Node & {
  __typename?: 'PaidSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The collection method for this subscription, either automatically charged or invoiced. */
  collectionMethod?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The date the subscription will be billed next. */
  nextBillingAt?: Maybe<Scalars['DateTime']>;
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars['String']>;
  /** The number of seats in the subscription. */
  seats: Scalars['Float'];
  /** The maximum number of seats that will be billed in the subscription. */
  seatsMaximum?: Maybe<Scalars['Float']>;
  /** The minimum number of seats that will be billed in the subscription. */
  seatsMinimum?: Maybe<Scalars['Float']>;
  /** The subscription type. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

/** A project. */
export type Project = Node & {
  __typename?: 'Project';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The project's color. */
  color: Scalars['String'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** The project's content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /** The project was created based on this issue. */
  convertedFromIssue?: Maybe<Issue>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the project. */
  creator?: Maybe<User>;
  /** The project's description. */
  description: Scalars['String'];
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The number of in progress estimation points after each week. */
  inProgressScopeHistory: Array<Scalars['Float']>;
  /** Settings for all integrations associated with that project. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The last template that was applied to this project. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The project lead. */
  lead?: Maybe<User>;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** The project's name. */
  name: Scalars['String'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float'];
  /** Milestones associated with the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: Maybe<Scalars['DateTime']>;
  /** Project updates associated with the project. */
  projectUpdates: ProjectUpdateConnection;
  /** The overall scope (total estimate points) of the project. */
  scope: Scalars['Float'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** The project's unique URL slug. */
  slugId: Scalars['String'];
  /** The sort order for the project within the organization. */
  sortOrder: Scalars['Float'];
  /** The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: Maybe<DateResolutionType>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The type of the state. */
  state: Scalars['String'];
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: Maybe<DateResolutionType>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /** A flag that indicates whether the project is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Project URL. */
  url: Scalars['String'];
};


/** A project. */
export type ProjectDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type ProjectArchivePayload = ArchivePayload & {
  __typename?: 'ProjectArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Project>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Project filtering options. */
export type ProjectCollectionFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectCollectionFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all projects. */
  every?: InputMaybe<ProjectFilter>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectCollectionFilter>>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the projects content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some projects. */
  some?: InputMaybe<ProjectFilter>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']>;
  /** The ID of the issue from which that project is created. */
  convertedFromIssueId?: InputMaybe<Scalars['String']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The ID of the last template applied to the project. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The name of the project. */
  name: Scalars['String'];
  /** The sort order for the project within shared views. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: InputMaybe<DateResolutionType>;
  /** The state of the project. */
  state?: InputMaybe<Scalars['String']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: InputMaybe<DateResolutionType>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars['String']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Project;
};

/** Project filtering options. */
export type ProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the projects content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectFilterSuggestionPayload = {
  __typename?: 'ProjectFilterSuggestionPayload';
  /** The json filter that is suggested. */
  filter?: Maybe<Scalars['JSONObject']>;
};

/** An external link for a project. */
export type ProjectLink = Node & {
  __typename?: 'ProjectLink';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the link. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The link's label. */
  label: Scalars['String'];
  /** The project that the link is associated with. */
  project: Project;
  /** The order of the item in the project resources list. */
  sortOrder: Scalars['Float'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The link's URL. */
  url: Scalars['String'];
};

export type ProjectLinkConnection = {
  __typename?: 'ProjectLinkConnection';
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The label for the link. */
  label: Scalars['String'];
  /** Related project for the link. */
  projectId: Scalars['String'];
  /** The order of the item in the project resources list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The URL of the link. */
  url: Scalars['String'];
};

export type ProjectLinkEdge = {
  __typename?: 'ProjectLinkEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ProjectLink;
};

export type ProjectLinkPayload = {
  __typename?: 'ProjectLinkPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectLinkUpdateInput = {
  /** The label for the link. */
  label?: InputMaybe<Scalars['String']>;
  /** The order of the item in the project resources list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The URL of the link. */
  url?: InputMaybe<Scalars['String']>;
};

/** A milestone for a project. */
export type ProjectMilestone = Node & {
  __typename?: 'ProjectMilestone';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The project milestone's description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /** [Internal] The project milestone's description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The name of the project milestone. */
  name: Scalars['String'];
  /** The project of the milestone. */
  project: Project;
  /** The order of the milestone in relation to other milestones within a project. */
  sortOrder: Scalars['Float'];
  /** The planned completion date of the milestone. */
  targetDate?: Maybe<Scalars['TimelessDate']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

/** Milestone collection filtering options. */
export type ProjectMilestoneCollectionFilter = {
  /** Compound filters, all of which need to be matched by the milestone. */
  and?: InputMaybe<Array<ProjectMilestoneCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all milestones. */
  every?: InputMaybe<ProjectMilestoneFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the milestone. */
  or?: InputMaybe<Array<ProjectMilestoneCollectionFilter>>;
  /** Filters that needs to be matched by some milestones. */
  some?: InputMaybe<ProjectMilestoneFilter>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectMilestoneConnection = {
  __typename?: 'ProjectMilestoneConnection';
  edges: Array<ProjectMilestoneEdge>;
  nodes: Array<ProjectMilestone>;
  pageInfo: PageInfo;
};

export type ProjectMilestoneCreateInput = {
  /** The description of the project milestone in markdown format. */
  description?: InputMaybe<Scalars['String']>;
  /** [Internal] The description of the project milestone as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSONObject']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the project milestone. */
  name: Scalars['String'];
  /** Related project for the project milestone. */
  projectId: Scalars['String'];
  /** The sort order for the project milestone within a project. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The planned target date of the project milestone. */
  targetDate?: InputMaybe<Scalars['TimelessDate']>;
};

export type ProjectMilestoneEdge = {
  __typename?: 'ProjectMilestoneEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ProjectMilestone;
};

/** Project milestone filtering options. */
export type ProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: InputMaybe<Array<ProjectMilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: InputMaybe<Array<ProjectMilestoneFilter>>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectMilestonePayload = {
  __typename?: 'ProjectMilestonePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project milestone that was created or updated. */
  projectMilestone: ProjectMilestone;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectMilestoneUpdateInput = {
  /** The description of the project milestone in markdown format. */
  description?: InputMaybe<Scalars['String']>;
  /** [Internal] The description of the project milestone as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSONObject']>;
  /** The name of the project milestone. */
  name?: InputMaybe<Scalars['String']>;
  /** The sort order for the project milestone within a project. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The planned target date of the project milestone. */
  targetDate?: InputMaybe<Scalars['TimelessDate']>;
};

/** A project related notification */
export type ProjectNotification = Entity & Node & Notification & {
  __typename?: 'ProjectNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The project related to the notification. */
  project: Project;
  /** The project update related to the notification. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** Notification type */
  type: Scalars['String'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that received the notification. */
  user: User;
};

/** A project notification subscription. */
export type ProjectNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'ProjectNotificationSubscription';
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']>;
  /** The project subscribed to. */
  project: Project;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type ProjectPayload = {
  __typename?: 'ProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectSearchPayload = {
  __typename?: 'ProjectSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<ProjectSearchResultEdge>;
  nodes: Array<ProjectSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float'];
};

export type ProjectSearchResult = Node & {
  __typename?: 'ProjectSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The project's color. */
  color: Scalars['String'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** The project's content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /** The project was created based on this issue. */
  convertedFromIssue?: Maybe<Issue>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the project. */
  creator?: Maybe<User>;
  /** The project's description. */
  description: Scalars['String'];
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The number of in progress estimation points after each week. */
  inProgressScopeHistory: Array<Scalars['Float']>;
  /** Settings for all integrations associated with that project. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The last template that was applied to this project. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The project lead. */
  lead?: Maybe<User>;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** Metadata related to search result */
  metadata: Scalars['JSONObject'];
  /** The project's name. */
  name: Scalars['String'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float'];
  /** Milestones associated with the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: Maybe<Scalars['DateTime']>;
  /** Project updates associated with the project. */
  projectUpdates: ProjectUpdateConnection;
  /** The overall scope (total estimate points) of the project. */
  scope: Scalars['Float'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** The project's unique URL slug. */
  slugId: Scalars['String'];
  /** The sort order for the project within the organization. */
  sortOrder: Scalars['Float'];
  /** The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: Maybe<DateResolutionType>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The type of the state. */
  state: Scalars['String'];
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: Maybe<DateResolutionType>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /** A flag that indicates whether the project is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Project URL. */
  url: Scalars['String'];
};


export type ProjectSearchResultDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type ProjectSearchResultConnection = {
  __typename?: 'ProjectSearchResultConnection';
  edges: Array<ProjectSearchResultEdge>;
  nodes: Array<ProjectSearchResult>;
  pageInfo: PageInfo;
};

export type ProjectSearchResultEdge = {
  __typename?: 'ProjectSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ProjectSearchResult;
};

/** Different tabs available inside a project. */
export enum ProjectTab {
  Activity = 'activity',
  Documents = 'documents',
  Issues = 'issues'
}

/** A update associated with an project. */
export type ProjectUpdate = Node & {
  __typename?: 'ProjectUpdate';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The update content in markdown format. */
  body: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The diff between the current update and the previous one. */
  diff?: Maybe<Scalars['JSON']>;
  /** The diff between the current update and the previous one, formatted as markdown. */
  diffMarkdown?: Maybe<Scalars['String']>;
  /** The time the project update was edited. */
  editedAt?: Maybe<Scalars['DateTime']>;
  /** The health of the project at the time of the update. */
  health: ProjectUpdateHealthType;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** [Internal] Serialized JSON representing current state of the project properties when posting the project update. */
  infoSnapshot?: Maybe<Scalars['JSONObject']>;
  /** [ALPHA] Whether project update diff should be hidden */
  isDiffHidden: Scalars['Boolean'];
  /** The project that the update is associated with. */
  project: Project;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The URL to the project update. */
  url: Scalars['String'];
  /** The user who wrote the update. */
  user: User;
};

export type ProjectUpdateConnection = {
  __typename?: 'ProjectUpdateConnection';
  edges: Array<ProjectUpdateEdge>;
  nodes: Array<ProjectUpdate>;
  pageInfo: PageInfo;
};

export type ProjectUpdateCreateInput = {
  /** The content of the project update in markdown format. */
  body?: InputMaybe<Scalars['String']>;
  /** [Internal] The content of the project update as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']>;
  /** The health of the project at the time of the update. */
  health?: InputMaybe<ProjectUpdateHealthType>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** [ALPHA] Whether the diff between the current update and the previous one should be hidden. */
  isDiffHidden?: InputMaybe<Scalars['Boolean']>;
  /** The project to associate the project update with. */
  projectId: Scalars['String'];
};

export type ProjectUpdateEdge = {
  __typename?: 'ProjectUpdateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ProjectUpdate;
};

/** ProjectUpdate filtering options. */
export type ProjectUpdateFilter = {
  /** Compound filters, all of which need to be matched by the ProjectUpdate. */
  and?: InputMaybe<Array<ProjectUpdateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the ProjectUpdate. */
  or?: InputMaybe<Array<ProjectUpdateFilter>>;
  /** Filters that the project update project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the project update creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

/** The health type of a project when the update is created. */
export enum ProjectUpdateHealthType {
  AtRisk = 'atRisk',
  OffTrack = 'offTrack',
  OnTrack = 'onTrack'
}

export type ProjectUpdateInput = {
  /** The date when the project was canceled. */
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']>;
  /** The date when the project was completed. */
  completedAt?: InputMaybe<Scalars['DateTime']>;
  /** The ID of the issue from which that project is created. */
  convertedFromIssueId?: InputMaybe<Scalars['String']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']>;
  /** The ID of the last template applied to the project. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The name of the project. */
  name?: InputMaybe<Scalars['String']>;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: InputMaybe<Scalars['DateTime']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']>;
  /** The sort order for the project in shared views. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: InputMaybe<DateResolutionType>;
  /** The state of the project. */
  state?: InputMaybe<Scalars['String']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: InputMaybe<DateResolutionType>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Holds information about when a user has interacted with a project update. */
export type ProjectUpdateInteraction = Node & {
  __typename?: 'ProjectUpdateInteraction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The project update that has been interacted with. */
  projectUpdate: ProjectUpdate;
  /** The time at which the user read the project update. */
  readAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that has interacted with the project update. */
  user: User;
};

export type ProjectUpdateInteractionConnection = {
  __typename?: 'ProjectUpdateInteractionConnection';
  edges: Array<ProjectUpdateInteractionEdge>;
  nodes: Array<ProjectUpdateInteraction>;
  pageInfo: PageInfo;
};

export type ProjectUpdateInteractionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The id of the project update that has been interacted with. */
  projectUpdateId: Scalars['String'];
  /** The time at which the user read the project update. */
  readAt: Scalars['DateTime'];
};

export type ProjectUpdateInteractionEdge = {
  __typename?: 'ProjectUpdateInteractionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ProjectUpdateInteraction;
};

export type ProjectUpdateInteractionPayload = {
  __typename?: 'ProjectUpdateInteractionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project update interaction that was created or updated. */
  projectUpdateInteraction: ProjectUpdateInteraction;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectUpdatePayload = {
  __typename?: 'ProjectUpdatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project update that was created or updated. */
  projectUpdate: ProjectUpdate;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The frequency at which to send project update reminders. */
export enum ProjectUpdateReminderFrequency {
  Month = 'month',
  Never = 'never',
  TwoWeeks = 'twoWeeks',
  Week = 'week'
}

export type ProjectUpdateReminderPayload = {
  __typename?: 'ProjectUpdateReminderPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectUpdateUpdateInput = {
  /** The content of the project update in markdown format. */
  body?: InputMaybe<Scalars['String']>;
  /** The content of the project update as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']>;
  /** The health of the project at the time of the update. */
  health?: InputMaybe<ProjectUpdateHealthType>;
  /** [ALPHA] Whether the diff between the current update and the previous one should be hidden. */
  isDiffHidden?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectUpdateWithInteractionPayload = {
  __typename?: 'ProjectUpdateWithInteractionPayload';
  /** The project update that was created or updated. */
  interaction: ProjectUpdateInteraction;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project update that was created or updated. */
  projectUpdate: ProjectUpdate;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A user's web browser push notification subscription. */
export type PushSubscription = Node & {
  __typename?: 'PushSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type PushSubscriptionConnection = {
  __typename?: 'PushSubscriptionConnection';
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

export type PushSubscriptionCreateInput = {
  /** The data of the subscription in stringified JSON format. */
  data: Scalars['String'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Whether this is a subscription payload for Google Cloud Messaging or Apple Push Notification service */
  type?: InputMaybe<PushSubscriptionType>;
  /** The user identifier of the subscription. */
  userId?: InputMaybe<Scalars['String']>;
};

export type PushSubscriptionEdge = {
  __typename?: 'PushSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: PushSubscription;
};

export type PushSubscriptionPayload = {
  __typename?: 'PushSubscriptionPayload';
  /** The push subscription that was created or updated. */
  entity: PushSubscription;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type PushSubscriptionTestPayload = {
  __typename?: 'PushSubscriptionTestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The different push subscription types */
export enum PushSubscriptionType {
  Apple = 'apple',
  AppleDevelopment = 'appleDevelopment',
  Firebase = 'firebase',
  Web = 'web'
}

export type Query = {
  __typename?: 'Query';
  /**
   * [DEPRECATED] [INTERNAL] One specific project milestone.
   * @deprecated This mutation is deprecated, please use `projectMilestone` instead.
   */
  ProjectMilestone: ProjectMilestone;
  /**
   * [DEPRECATED] [INTERNAL] All milestones for the project.
   * @deprecated This mutation is deprecated, please use `projectMilestones` instead.
   */
  ProjectMilestones: ProjectMilestoneConnection;
  /** All teams you the user can administrate. Administrable teams are teams whose settings the user can change, but to whose issues the user doesn't necessarily have access to. */
  administrableTeams: TeamConnection;
  /** All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get basic information for an application. */
  applicationInfo: Application;
  /** [INTERNAL] Get basic information for a list of applications */
  applicationInfoByIds: Array<Application>;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /** [Internal] All archived teams of the organization. */
  archivedTeams: Array<Team>;
  /**
   *
   * One specific issue attachment.
   * [Deprecated] 'url' can no longer be used as the 'id' parameter. Use 'attachmentsForUrl' instead
   */
  attachment: Attachment;
  /**
   *
   * Query an issue by its associated attachment, and its id.
   *
   * @deprecated Will be removed in near future, please use `attachmentsForURL` to get attachments and their issues instead.
   */
  attachmentIssue: Issue;
  /** [Internal] Get a list of all unique attachment sources in the workspace */
  attachmentSources: AttachmentSourcesPayload;
  /**
   * All issue attachments.
   *
   * To get attachments for a given URL, use `attachmentsForURL` query.
   */
  attachments: AttachmentConnection;
  /** Returns issue attachments for a given `url`. */
  attachmentsForURL: AttachmentConnection;
  /** All audit log entries. */
  auditEntries: AuditEntryConnection;
  /** List of audit entry types. */
  auditEntryTypes: Array<AuditEntryType>;
  /** User's active sessions. */
  authenticationSessions: Array<AuthenticationSessionResponse>;
  /** [INTERNAL] Get all authorized applications for a user */
  authorizedApplications: Array<AuthorizedApplication>;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** A specific comment. */
  comment: Comment;
  /** All comments. */
  comments: CommentConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** [INTERNAL] Suggests metadata for a view based on it's filters. */
  customViewDetailsSuggestion: CustomViewSuggestionPayload;
  /** Whether a custom view has other subscribers than the current user in the organization. */
  customViewHasSubscribers: CustomViewHasSubscribersPayload;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All cycles. */
  cycles: CycleConnection;
  /** One specific document. */
  document: Document;
  /** A collection of document content history entries. */
  documentContentHistory: DocumentContentHistoryPayload;
  /** All documents in the workspace. */
  documents: DocumentConnection;
  /** A specific emoji. */
  emoji: Emoji;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** One specific external user. */
  externalUser: ExternalUser;
  /** All external users for the organization. */
  externalUsers: ExternalUserConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** One specific integration. */
  integration: Integration;
  /** One specific integrationTemplate. */
  integrationTemplate: IntegrationTemplate;
  /** Template and integration connections. */
  integrationTemplates: IntegrationTemplateConnection;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** One specific set of settings. */
  integrationsSettings: IntegrationsSettings;
  /** One specific issue. */
  issue: Issue;
  /** Find issues that are related to a given Figma file key. */
  issueFigmaFileKeySearch: IssueConnection;
  /** Suggests filters for an issue view based on a text prompt. */
  issueFilterSuggestion: IssueFilterSuggestionPayload;
  /** Checks a CSV file validity against a specific import service. */
  issueImportCheckCSV: IssueImportCheckPayload;
  /** Fetches the GitHub token, completing the OAuth flow. */
  issueImportFinishGithubOAuth: GithubOAuthTokenPayload;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** Issue priority values and corresponding labels. */
  issuePriorityValues: Array<IssuePriorityValue>;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** [DEPRECATED] Search issues. This endpoint is deprecated and will be removed in the future – use `searchIssues` instead. */
  issueSearch: IssueConnection;
  /** Find issue based on the VCS branch name. */
  issueVcsBranchSearch?: Maybe<Issue>;
  /** All issues. */
  issues: IssueConnection;
  /** One specific notification. */
  notification: Notification;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** All notifications. */
  notifications: NotificationConnection;
  /** The user's organization. */
  organization: Organization;
  /** [INTERNAL] Checks whether the domain can be claimed. */
  organizationDomainClaimRequest: OrganizationDomainClaimPayload;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** One specific organization invite. */
  organizationInvite: OrganizationInvite;
  /** One specific organization invite. */
  organizationInviteDetails: OrganizationInviteDetailsPayload;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** One specific project. */
  project: Project;
  /** Suggests filters for a project view based on a text prompt. */
  projectFilterSuggestion: ProjectFilterSuggestionPayload;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** One specific project milestone. */
  projectMilestone: ProjectMilestone;
  /** All milestones for the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** A specific project update. */
  projectUpdate: ProjectUpdate;
  /** A specific interaction on a project update. */
  projectUpdateInteraction: ProjectUpdateInteraction;
  /** All interactions on project updates. */
  projectUpdateInteractions: ProjectUpdateInteractionConnection;
  /** All project updates. */
  projectUpdates: ProjectUpdateConnection;
  /** All projects. */
  projects: ProjectConnection;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionTestPayload;
  /** The status of the rate limiter. */
  rateLimitStatus: RateLimitPayload;
  /** One specific roadmap. */
  roadmap: Roadmap;
  /** One specific roadmapToProject. */
  roadmapToProject: RoadmapToProject;
  /** Custom views for the user. */
  roadmapToProjects: RoadmapToProjectConnection;
  /** All roadmaps in the workspace. */
  roadmaps: RoadmapConnection;
  /** Search documents. */
  searchDocuments: DocumentSearchPayload;
  /** Search issues. */
  searchIssues: IssueSearchPayload;
  /** Search projects. */
  searchProjects: ProjectSearchPayload;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** One specific team. */
  team: Team;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** All teams whose issues can be accessed by the user. This might be different from `administrableTeams`, which also includes teams whose settings can be changed by the user. */
  teams: TeamConnection;
  /** A specific template. */
  template: Template;
  /** All templates from all users. */
  templates: Array<Template>;
  /** Returns all templates that are associated with the integration type. */
  templatesForIntegration: Array<Template>;
  /** One specific user. */
  user: User;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All users for the organization. */
  users: UserConnection;
  /** The currently authenticated user. */
  viewer: User;
  /** A specific webhook. */
  webhook: Webhook;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** One specific state. */
  workflowState: WorkflowState;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
  /** [INTERNAL] Get all authorized applications (with limited fields) for a workspace */
  workspaceAuthorizedApplications: Array<WorkspaceAuthorizedApplication>;
};


export type QueryProjectMilestoneArgs = {
  id: Scalars['String'];
};


export type QueryProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectMilestoneFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryAdministrableTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApiKeysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApplicationInfoArgs = {
  clientId: Scalars['String'];
};


export type QueryApplicationInfoByIdsArgs = {
  ids: Array<Scalars['String']>;
};


export type QueryApplicationWithAuthorizationArgs = {
  actor?: InputMaybe<Scalars['String']>;
  clientId: Scalars['String'];
  redirectUri?: InputMaybe<Scalars['String']>;
  scope: Array<Scalars['String']>;
};


export type QueryAttachmentArgs = {
  id: Scalars['String'];
};


export type QueryAttachmentIssueArgs = {
  id: Scalars['String'];
};


export type QueryAttachmentSourcesArgs = {
  teamId?: InputMaybe<Scalars['String']>;
};


export type QueryAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryAttachmentsForUrlArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  url: Scalars['String'];
};


export type QueryAuditEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuditEntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomViewArgs = {
  id: Scalars['String'];
};


export type QueryCustomViewDetailsSuggestionArgs = {
  filter: Scalars['JSONObject'];
  modelName?: InputMaybe<Scalars['String']>;
};


export type QueryCustomViewHasSubscribersArgs = {
  id: Scalars['String'];
};


export type QueryCustomViewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCycleArgs = {
  id: Scalars['String'];
};


export type QueryCyclesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryDocumentArgs = {
  id: Scalars['String'];
};


export type QueryDocumentContentHistoryArgs = {
  id: Scalars['String'];
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryEmojiArgs = {
  id: Scalars['String'];
};


export type QueryEmojisArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryExternalUserArgs = {
  id: Scalars['String'];
};


export type QueryExternalUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryFavoriteArgs = {
  id: Scalars['String'];
};


export type QueryFavoritesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationArgs = {
  id: Scalars['String'];
};


export type QueryIntegrationTemplateArgs = {
  id: Scalars['String'];
};


export type QueryIntegrationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsSettingsArgs = {
  id: Scalars['String'];
};


export type QueryIssueArgs = {
  id: Scalars['String'];
};


export type QueryIssueFigmaFileKeySearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  fileKey: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueFilterSuggestionArgs = {
  prompt: Scalars['String'];
};


export type QueryIssueImportCheckCsvArgs = {
  csvUrl: Scalars['String'];
  service: Scalars['String'];
};


export type QueryIssueImportFinishGithubOAuthArgs = {
  code: Scalars['String'];
};


export type QueryIssueLabelArgs = {
  id: Scalars['String'];
};


export type QueryIssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueRelationArgs = {
  id: Scalars['String'];
};


export type QueryIssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryIssueVcsBranchSearchArgs = {
  branchName: Scalars['String'];
};


export type QueryIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationArgs = {
  id: Scalars['String'];
};


export type QueryNotificationSubscriptionArgs = {
  id: Scalars['String'];
};


export type QueryNotificationSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryOrganizationDomainClaimRequestArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationExistsArgs = {
  urlKey: Scalars['String'];
};


export type QueryOrganizationInviteArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationInviteDetailsArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationInvitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryProjectFilterSuggestionArgs = {
  prompt: Scalars['String'];
};


export type QueryProjectLinkArgs = {
  id: Scalars['String'];
};


export type QueryProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryPushSubscriptionTestArgs = {
  sendStrategy?: InputMaybe<SendStrategy>;
  targetMobile?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRoadmapArgs = {
  id: Scalars['String'];
};


export type QueryRoadmapToProjectArgs = {
  id: Scalars['String'];
};


export type QueryRoadmapToProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryRoadmapsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QuerySearchDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeComments?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  teamId?: InputMaybe<Scalars['String']>;
  term: Scalars['String'];
};


export type QuerySearchIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeComments?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  teamId?: InputMaybe<Scalars['String']>;
  term: Scalars['String'];
};


export type QuerySearchProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeComments?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  teamId?: InputMaybe<Scalars['String']>;
  term: Scalars['String'];
};


export type QuerySsoUrlFromEmailArgs = {
  email: Scalars['String'];
  isDesktop?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTemplateArgs = {
  id: Scalars['String'];
};


export type QueryTemplatesForIntegrationArgs = {
  integrationType: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWebhooksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWorkflowStateArgs = {
  id: Scalars['String'];
};


export type QueryWorkflowStatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type RateLimitPayload = {
  __typename?: 'RateLimitPayload';
  /** The identifier we rate limit on. */
  identifier?: Maybe<Scalars['String']>;
  /** The kind of rate limit selected for this request. */
  kind: Scalars['String'];
  /** The state of the rate limit. */
  limits: Array<RateLimitResultPayload>;
};

export type RateLimitResultPayload = {
  __typename?: 'RateLimitResultPayload';
  /** The total allowed quantity for this type of limit. */
  allowedAmount: Scalars['Float'];
  /** The period in which the rate limit is fully replenished in ms. */
  period: Scalars['Float'];
  /** The remaining quantity for this type of limit after this request. */
  remainingAmount: Scalars['Float'];
  /** The requested quantity for this type of limit. */
  requestedAmount: Scalars['Float'];
  /** The timestamp after the rate limit is fully replenished as a UNIX timestamp. */
  reset: Scalars['Float'];
  /** What is being rate limited. */
  type: Scalars['String'];
};

/** A reaction associated with a comment or a project update. */
export type Reaction = Node & {
  __typename?: 'Reaction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The comment that the reaction is associated with. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Name of the reaction's emoji. */
  emoji: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that the reaction is associated with. */
  issue?: Maybe<Issue>;
  /** The project update that the reaction is associated with. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that created the reaction. */
  user?: Maybe<User>;
};

export type ReactionConnection = {
  __typename?: 'ReactionConnection';
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionCreateInput = {
  /** The comment to associate the reaction with. */
  commentId?: InputMaybe<Scalars['String']>;
  /** The emoji the user reacted with. */
  emoji?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one */
  id?: InputMaybe<Scalars['String']>;
  /** The issue to associate the reaction with. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The project update to associate the reaction with. */
  projectUpdateId?: InputMaybe<Scalars['String']>;
};

export type ReactionEdge = {
  __typename?: 'ReactionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Reaction;
};

export type ReactionPayload = {
  __typename?: 'ReactionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  reaction: Reaction;
  success: Scalars['Boolean'];
};

/** Comparator for relation existence. */
export type RelationExistsComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Not equals constraint. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Features release channel */
export enum ReleaseChannel {
  Beta = 'beta',
  Internal = 'internal',
  PreRelease = 'preRelease',
  Public = 'public'
}

/** A roadmap for projects. */
export type Roadmap = Node & {
  __typename?: 'Roadmap';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The roadmap's color. */
  color?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the roadmap. */
  creator: User;
  /** The description of the roadmap. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The name of the roadmap. */
  name: Scalars['String'];
  /** The organization of the roadmap. */
  organization: Organization;
  /** The user who owns the roadmap. */
  owner: User;
  /** Projects associated with the roadmap. */
  projects: ProjectConnection;
  /** The roadmap's unique URL slug. */
  slugId: Scalars['String'];
  /** The sort order of the roadmap within the organization. */
  sortOrder: Scalars['Float'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** A roadmap for projects. */
export type RoadmapProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type RoadmapArchivePayload = ArchivePayload & {
  __typename?: 'RoadmapArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Roadmap>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Roadmap collection filtering options. */
export type RoadmapCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<RoadmapCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the roadmap creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all roadmaps. */
  every?: InputMaybe<RoadmapFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the roadmap name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<RoadmapCollectionFilter>>;
  /** Comparator for the roadmap slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some roadmaps. */
  some?: InputMaybe<RoadmapFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type RoadmapConnection = {
  __typename?: 'RoadmapConnection';
  edges: Array<RoadmapEdge>;
  nodes: Array<Roadmap>;
  pageInfo: PageInfo;
};

export type RoadmapCreateInput = {
  /** The roadmap's color. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the roadmap. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the roadmap. */
  name: Scalars['String'];
  /** The owner of the roadmap */
  ownerId?: InputMaybe<Scalars['String']>;
  /** The sort order of the roadmap within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type RoadmapEdge = {
  __typename?: 'RoadmapEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Roadmap;
};

/** Roadmap filtering options. */
export type RoadmapFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<RoadmapFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the roadmap creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the roadmap name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<RoadmapFilter>>;
  /** Comparator for the roadmap slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type RoadmapPayload = {
  __typename?: 'RoadmapPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The roadmap that was created or updated. */
  roadmap: Roadmap;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Join table between projects and roadmaps */
export type RoadmapToProject = Node & {
  __typename?: 'RoadmapToProject';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The project that the roadmap is associated with. */
  project: Project;
  /** The roadmap that the project is associated with. */
  roadmap: Roadmap;
  /** The sort order of the project within the roadmap. */
  sortOrder: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type RoadmapToProjectConnection = {
  __typename?: 'RoadmapToProjectConnection';
  edges: Array<RoadmapToProjectEdge>;
  nodes: Array<RoadmapToProject>;
  pageInfo: PageInfo;
};

export type RoadmapToProjectCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the project. */
  projectId: Scalars['String'];
  /** The identifier of the roadmap. */
  roadmapId: Scalars['String'];
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type RoadmapToProjectEdge = {
  __typename?: 'RoadmapToProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: RoadmapToProject;
};

export type RoadmapToProjectPayload = {
  __typename?: 'RoadmapToProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The roadmapToProject that was created or updated. */
  roadmapToProject: RoadmapToProject;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type RoadmapToProjectUpdateInput = {
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type RoadmapUpdateInput = {
  /** The roadmap's color. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the roadmap. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the roadmap. */
  name?: InputMaybe<Scalars['String']>;
  /** The owner of the roadmap */
  ownerId?: InputMaybe<Scalars['String']>;
  /** The sort order of the roadmap within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

/** Which day count to use for SLA calculations */
export enum SlaDayCountType {
  All = 'all',
  OnlyBusinessDays = 'onlyBusinessDays'
}

export type SamlConfiguration = {
  __typename?: 'SamlConfiguration';
  /** The issuer's custom entity ID. */
  issuerEntityId?: Maybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars['String']>;
};

export type SamlConfigurationInput = {
  /** The issuer's custom entity ID. */
  issuerEntityId?: InputMaybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: InputMaybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: InputMaybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: InputMaybe<Scalars['String']>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: InputMaybe<Scalars['String']>;
};

/** The organization's SAML configuration */
export type SamlConfigurationPayload = {
  __typename?: 'SamlConfigurationPayload';
  /** The issuer's custom entity ID. */
  issuerEntityId?: Maybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']>;
};

export enum SendStrategy {
  Desktop = 'desktop',
  DesktopAndPush = 'desktopAndPush',
  DesktopThenPush = 'desktopThenPush',
  Push = 'push'
}

/** Sentry specific settings. */
export type SentrySettings = {
  __typename?: 'SentrySettings';
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String'];
};

export type SentrySettingsInput = {
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String'];
};

export enum SlaStatus {
  Breached = 'Breached',
  Completed = 'Completed',
  Failed = 'Failed',
  HighRisk = 'HighRisk',
  LowRisk = 'LowRisk',
  MediumRisk = 'MediumRisk',
  Paused = 'Paused'
}

/** Comparator for sla status. */
export type SlaStatusComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<SlaStatus>;
  /** In-array constraint. */
  in?: InputMaybe<Array<SlaStatus>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<SlaStatus>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<SlaStatus>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** Slack Asks specific settings. */
export type SlackAsksSettings = {
  __typename?: 'SlackAsksSettings';
  /** The user role type that is allowed to manage Asks settings. */
  canAdministrate: UserRoleType;
  /** The mapping of Slack channel ID => Slack channel name for connected channels. */
  slackChannelMapping?: Maybe<Array<SlackChannelNameMapping>>;
};

export type SlackAsksSettingsInput = {
  /** The user role type that is allowed to manage Asks settings. */
  canAdministrate: UserRoleType;
  /** The mapping of Slack channel ID => Slack channel name for connected channels. */
  slackChannelMapping?: InputMaybe<Array<SlackChannelNameMappingInput>>;
};

/** Tuple for mapping Slack channel IDs to names */
export type SlackAsksTeamSettings = {
  __typename?: 'SlackAsksTeamSettings';
  /** Whether the default Asks template is enabled in the given channel for this team */
  hasDefaultAsk: Scalars['Boolean'];
  /** The Linear team ID. */
  id: Scalars['String'];
};

export type SlackAsksTeamSettingsInput = {
  /** Whether the default Asks template is enabled in the given channel for this team */
  hasDefaultAsk: Scalars['Boolean'];
  /** The Linear team ID. */
  id: Scalars['String'];
};

export type SlackChannelConnectPayload = {
  __typename?: 'SlackChannelConnectPayload';
  /** Whether the bot needs to be manually added to the channel. */
  addBot: Scalars['Boolean'];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether it's recommended to connect main Slack integration. */
  nudgeToConnectMainSlackIntegration?: Maybe<Scalars['Boolean']>;
  /** Whether it's recommended to update main Slack integration. */
  nudgeToUpdateMainSlackIntegration?: Maybe<Scalars['Boolean']>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Object for mapping Slack channel IDs to names and other settings */
export type SlackChannelNameMapping = {
  __typename?: 'SlackChannelNameMapping';
  /** Whether or not @-mentioning the bot should automatically create an Ask with the message */
  autoCreateOnBotMention?: Maybe<Scalars['Boolean']>;
  /** Whether or not using the :ticket: emoji in this channel should automatically create Asks */
  autoCreateOnEmoji?: Maybe<Scalars['Boolean']>;
  /** Whether or not top-level messages in this channel should automatically create Asks */
  autoCreateOnMessage?: Maybe<Scalars['Boolean']>;
  /** The optional template ID to use for Asks auto-created in this channel. If not set, auto-created Asks won't use any template. */
  autoCreateTemplateId?: Maybe<Scalars['String']>;
  /** Whether or not we the Linear Asks bot has been added to this Slack channel */
  botAdded?: Maybe<Scalars['Boolean']>;
  /** The Slack channel ID. */
  id: Scalars['String'];
  /** Whether or not the Slack channel is private */
  isPrivate?: Maybe<Scalars['Boolean']>;
  /** Whether or not the Slack channel is shared with an external org */
  isShared?: Maybe<Scalars['Boolean']>;
  /** The Slack channel name. */
  name: Scalars['String'];
  /** Which teams are connected to the channel and settings for those teams */
  teams: Array<SlackAsksTeamSettings>;
};

export type SlackChannelNameMappingInput = {
  /** Whether or not @-mentioning the bot should automatically create an Ask with the message */
  autoCreateOnBotMention?: InputMaybe<Scalars['Boolean']>;
  /** Whether or not using the :ticket: emoji in this channel should automatically create Asks */
  autoCreateOnEmoji?: InputMaybe<Scalars['Boolean']>;
  /** Whether or not top-level messages in this channel should automatically create Asks */
  autoCreateOnMessage?: InputMaybe<Scalars['Boolean']>;
  /** The optional template ID to use for Asks auto-created in this channel. If not set, auto-created Asks won't use any template. */
  autoCreateTemplateId?: InputMaybe<Scalars['String']>;
  /** Whether or not we the Linear Asks bot has been added to this Slack channel */
  botAdded?: InputMaybe<Scalars['Boolean']>;
  /** The Slack channel ID. */
  id: Scalars['String'];
  /** Whether or not the Slack channel is private */
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  /** Whether or not the Slack channel is shared with an external org */
  isShared?: InputMaybe<Scalars['Boolean']>;
  /** The Slack channel name. */
  name: Scalars['String'];
  /** Which teams are connected to the channel and settings for those teams */
  teams: Array<SlackAsksTeamSettingsInput>;
};

export enum SlackChannelType {
  DirectMessage = 'DirectMessage',
  MultiPersonDirectMessage = 'MultiPersonDirectMessage',
  Private = 'Private',
  Public = 'Public'
}

/** Slack notification specific settings. */
export type SlackPostSettings = {
  __typename?: 'SlackPostSettings';
  channel: Scalars['String'];
  channelId: Scalars['String'];
  channelType?: Maybe<SlackChannelType>;
  configurationUrl: Scalars['String'];
};

export type SlackPostSettingsInput = {
  channel: Scalars['String'];
  channelId: Scalars['String'];
  channelType?: InputMaybe<SlackChannelType>;
  configurationUrl: Scalars['String'];
};

/** Settings for the regular Slack integration. */
export type SlackSettings = {
  __typename?: 'SlackSettings';
  /** Whether Linear should automatically respond with issue unfurls when an issue identifier is mentioned in a Slack message. */
  linkOnIssueIdMention: Scalars['Boolean'];
};

export type SlackSettingsInput = {
  /** Whether Linear should automatically respond with issue unfurls when an issue identifier is mentioned in a Slack message. */
  linkOnIssueIdMention: Scalars['Boolean'];
};

/** Comparator for issue source type. */
export type SourceMetadataComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, all of which need to be matched by the sub type. */
  subType?: InputMaybe<SubTypeComparator>;
};

/** Comparator for `sourceType` field. */
export type SourceTypeComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']>;
};

export type SsoUrlFromEmailResponse = {
  __typename?: 'SsoUrlFromEmailResponse';
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars['String'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Comparator for strings. */
export type StringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']>;
};

/** Comparator for source type. */
export type SubTypeComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

export type SynchronizedPayload = {
  __typename?: 'SynchronizedPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  __typename?: 'Team';
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Period after which automatically closed and completed issues are automatically archived in months. */
  autoArchivePeriod: Scalars['Float'];
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod?: Maybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars['String']>;
  /** The automation states for the team. */
  automationStates: GitAutomationStateConnection;
  /** The team's color. */
  color?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Calendar feed URL (iCal) for cycles. */
  cycleCalenderUrl: Scalars['String'];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars['Float'];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars['Float'];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars['Boolean'];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars['Boolean'];
  /** Auto assign issues to current cycle if in active status. */
  cycleLockToActive: Scalars['Boolean'];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars['Float'];
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars['Boolean'];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars['Float'];
  /** The default workflow state into which issues are set when they are opened by team members. */
  defaultIssueState?: Maybe<WorkflowState>;
  /** The default template to use for new projects created for the team. */
  defaultProjectTemplate?: Maybe<Template>;
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by members of the team.
   * @deprecated Use defaultTemplateForMembers instead
   */
  defaultTemplateForMembersId?: Maybe<Scalars['String']>;
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by non-members of the team.
   * @deprecated Use defaultTemplateForNonMembers instead
   */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']>;
  /** The team's description. */
  description?: Maybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR has been opened as draft. */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars['Boolean'];
  /** The icon of the team. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Settings for all integrations associated with that team. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars['String'];
  /** Number of issues in the team. */
  issueCount: Scalars['Int'];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars['Boolean'];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars['Boolean'];
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType: Scalars['String'];
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst: Scalars['Boolean'];
  /** [DEPRECATED] Whether to move issues to bottom of the column when changing state. Use setIssueSortOrderOnStateChange instead. */
  issueSortOrderDefaultToBottom: Scalars['Boolean'];
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** [INTERNAL] Whether new users should join this team by default. */
  joinByDefault?: Maybe<Scalars['Boolean']>;
  /** The team's unique key. The key is used in URLs. */
  key: Scalars['String'];
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Users who are members of this team. */
  members: UserConnection;
  /** Memberships associated with the team. For easier access of the same data, use `members` query. */
  memberships: TeamMembershipConnection;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a PR is ready to be merged. */
  mergeableWorkflowState?: Maybe<WorkflowState>;
  /** The team's name. */
  name: Scalars['String'];
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Whether the team is private or not. */
  private: Scalars['Boolean'];
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** Whether an issue needs to have a priority set before leaving triage */
  requirePriorityToLeaveTriage: Scalars['Boolean'];
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** Where to move issues when changing state. */
  setIssueSortOrderOnStateChange: Scalars['String'];
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars['String'];
  /** Whether triage mode is enabled for the team or not. */
  triageEnabled: Scalars['Boolean'];
  /** The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. */
  triageIssueState?: Maybe<WorkflowState>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars['Float'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};


/** An organizational unit that contains issues. */
export type TeamAutomationStatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamIssueCountArgs = {
  includeArchived?: InputMaybe<Scalars['Boolean']>;
};


/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type TeamArchivePayload = ArchivePayload & {
  __typename?: 'TeamArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Team>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Roadmap collection filtering options. */
export type TeamCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<TeamCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all roadmaps. */
  every?: InputMaybe<TeamFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<TeamCollectionFilter>>;
  /** Filters that needs to be matched by some roadmaps. */
  some?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamCreateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']>;
  /** The identifier of the default project template of this team. */
  defaultProjectTemplateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']>;
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType?: InputMaybe<Scalars['String']>;
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']>;
  /** [DEPRECATED] Whether to move issues to bottom of the column when changing state. Use setIssueSortOrderOnStateChange instead. */
  issueSortOrderDefaultToBottom?: InputMaybe<Scalars['Boolean']>;
  /** The key of the team. If not given, the key will be generated based on the name of the team. */
  key?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The name of the team. */
  name: Scalars['String'];
  /** The organization associated with the team. */
  organizationId?: InputMaybe<Scalars['String']>;
  /** Internal. Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']>;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage?: InputMaybe<Scalars['Boolean']>;
  /** Whether to move issues to bottom of the column when changing state. */
  setIssueSortOrderOnStateChange?: InputMaybe<Scalars['String']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Team;
};

/** Team filtering options. */
export type TeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  __typename?: 'TeamMembership';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Whether the user is the owner of the team */
  owner?: Maybe<Scalars['Boolean']>;
  /** The order of the item in the users team list. */
  sortOrder: Scalars['Float'];
  /** The team that the membership is associated with. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that the membership is associated with. */
  user: User;
};

export type TeamMembershipConnection = {
  __typename?: 'TeamMembershipConnection';
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']>;
  /** The position of the item in the users list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The identifier of the team associated with the membership. */
  teamId: Scalars['String'];
  /** The identifier of the user associated with the membership. */
  userId: Scalars['String'];
};

export type TeamMembershipEdge = {
  __typename?: 'TeamMembershipEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: TeamMembership;
};

export type TeamMembershipPayload = {
  __typename?: 'TeamMembershipPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
};

export type TeamMembershipUpdateInput = {
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']>;
  /** The position of the item in the users list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

/** A team notification subscription. */
export type TeamNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'TeamNotificationSubscription';
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team subscribed to. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type TeamPayload = {
  __typename?: 'TeamPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
};

/** Tuple for mapping Linear teams to GitHub repos. */
export type TeamRepoMapping = {
  __typename?: 'TeamRepoMapping';
  /** The GitHub repo id. */
  gitHubRepoId: Scalars['Float'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String'];
};

export type TeamRepoMappingInput = {
  /** The GitHub repo id. */
  gitHubRepoId: Scalars['Float'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String'];
};

export type TeamUpdateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']>;
  /** Whether the first cycle should start in the current or the next week. */
  cycleEnabledStartWeek?: InputMaybe<Scalars['String']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']>;
  /** Default status for newly created issues. */
  defaultIssueStateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default project template of this team. */
  defaultProjectTemplateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']>;
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType?: InputMaybe<Scalars['String']>;
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']>;
  /** [DEPRECATED] Whether to move issues to bottom of the column when changing state. Use setIssueSortOrderOnStateChange instead. */
  issueSortOrderDefaultToBottom?: InputMaybe<Scalars['Boolean']>;
  /** Whether new users should join this team by default. Mutation restricted to workspace admins! */
  joinByDefault?: InputMaybe<Scalars['Boolean']>;
  /** The key of the team. */
  key?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR is ready to be merged. */
  mergeableWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The name of the team. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']>;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage?: InputMaybe<Scalars['Boolean']>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** Whether to move issues to bottom of the column when changing state. */
  setIssueSortOrderOnStateChange?: InputMaybe<Scalars['String']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']>;
};

/** A template object used for creating entities faster. */
export type Template = Node & {
  __typename?: 'Template';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the template. */
  creator?: Maybe<User>;
  /** Template description. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The user who last updated the template. */
  lastUpdatedBy?: Maybe<User>;
  /** The name of the template. */
  name: Scalars['String'];
  /** The organization that the template is associated with. If null, the template is associated with a particular team. */
  organization?: Maybe<Organization>;
  /** The team that the template is associated with. If null, the template is global to the workspace. */
  team?: Maybe<Team>;
  /** Template data. */
  templateData: Scalars['JSON'];
  /** The entity type this template is for. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateCreateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The template name. */
  name: Scalars['String'];
  /** The identifier or key of the team associated with the template. If not given, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars['JSON'];
  /** The template type, e.g. 'issue'. */
  type: Scalars['String'];
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Template;
};

export type TemplatePayload = {
  __typename?: 'TemplatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The template that was created or updated. */
  template: Template;
};

export type TemplateUpdateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']>;
  /** The template name. */
  name?: InputMaybe<Scalars['String']>;
  /** The identifier or key of the team associated with the template. If set to null, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: InputMaybe<Scalars['JSON']>;
};

/** Comparator for timeless dates. */
export type TimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDate']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDate']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDate']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDate']>>;
};

export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars['String'];
  /** An optional invite link for an organization. */
  inviteLink?: InputMaybe<Scalars['String']>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String'];
  /** The magic login code. */
  token: Scalars['String'];
};

/** A team's triage responsibility. */
export type TriageResponsibility = Node & {
  __typename?: 'TriageResponsibility';
  /** The action to take when an issue is added to triage. */
  action: TriageResponsibilityAction;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The integration used for scheduling. */
  integration: Integration;
  /** Set of users used for triage responsibility. */
  manualSelection?: Maybe<Scalars['JSONObject']>;
  /** Schedule used for triage responsibility. */
  schedule?: Maybe<Scalars['JSONObject']>;
  /** The team to which the triage responsibility belongs to. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

/** Which action should be taken after an issue is added to triage. */
export enum TriageResponsibilityAction {
  Assign = 'assign',
  Notify = 'notify'
}

export type TriageResponsibilityConnection = {
  __typename?: 'TriageResponsibilityConnection';
  edges: Array<TriageResponsibilityEdge>;
  nodes: Array<TriageResponsibility>;
  pageInfo: PageInfo;
};

export type TriageResponsibilityEdge = {
  __typename?: 'TriageResponsibilityEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: TriageResponsibility;
};

/** Manual triage responsibility using a set of users. */
export type TriageResponsibilityManualSelection = {
  /** [INTERNAL] The index of the current userId used for the assign action when having more than one user. */
  assignmentIndex?: InputMaybe<Scalars['Int']>;
  /** The set of users responsible for triage. */
  userIds: Array<Scalars['String']>;
};

/** Triage responsibility schedule. */
export type TriageResponsibilitySchedule = {
  /** The schedule entries, undefined if the schedule is not fetched yet or failed. */
  entries?: InputMaybe<Array<TriageResponsibilityScheduleEntry>>;
  /** Optional user presentable error message when using an integration. */
  integrationError?: InputMaybe<Scalars['String']>;
  /** Reference to the integration's schedule when using an integration. */
  integrationScheduleId?: InputMaybe<Scalars['String']>;
};

/** The triage responsibility schedule entry. */
export type TriageResponsibilityScheduleEntry = {
  /** The end date in ISO 8601 date-time format. */
  endsAt: Scalars['DateTime'];
  /** The external email of the user on schedule if the external user could not be found in Linear. */
  externalUserEmail?: InputMaybe<Scalars['String']>;
  /** The start date in ISO 8601 date-time format. */
  startsAt: Scalars['DateTime'];
  /** The linear user id of the user on schedule. */
  userId?: InputMaybe<Scalars['String']>;
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  __typename?: 'UploadFile';
  /** The asset URL for the uploaded file. (assigned automatically) */
  assetUrl: Scalars['String'];
  /** The content type. */
  contentType: Scalars['String'];
  /** The filename. */
  filename: Scalars['String'];
  headers: Array<UploadFileHeader>;
  metaData?: Maybe<Scalars['JSONObject']>;
  /** The size of the uploaded file. */
  size: Scalars['Int'];
  /** The signed URL the for the uploaded file. (assigned automatically) */
  uploadUrl: Scalars['String'];
};

export type UploadFileHeader = {
  __typename?: 'UploadFileHeader';
  /** Upload file header key. */
  key: Scalars['String'];
  /** Upload file header value. */
  value: Scalars['String'];
};

export type UploadPayload = {
  __typename?: 'UploadPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  __typename?: 'User';
  /** Whether the user account is active or disabled (suspended). */
  active: Scalars['Boolean'];
  /** Whether the user is an organization administrator. */
  admin: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** [DEPRECATED] Hash for the user to be used in calendar URLs. */
  calendarHash?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Number of issues created. */
  createdIssueCount: Scalars['Int'];
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** A short description of the user, either its title or bio. */
  description?: Maybe<Scalars['String']>;
  /** Reason why is the account disabled. */
  disableReason?: Maybe<Scalars['String']>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String'];
  /** The user's email address. */
  email: Scalars['String'];
  /** Whether the user is a guest in the workspace and limited to accessing a subset of teams. */
  guest: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars['String'];
  /** Whether the user is the currently authenticated user. */
  isMe: Scalars['Boolean'];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars['DateTime']>;
  /** The user's full name. */
  name: Scalars['String'];
  /** Organization the user belongs to. */
  organization: Organization;
  /** The emoji to represent the user current status. */
  statusEmoji?: Maybe<Scalars['String']>;
  /** The label of the user current status. */
  statusLabel?: Maybe<Scalars['String']>;
  /** A date at which the user current status should be cleared. */
  statusUntilAt?: Maybe<Scalars['DateTime']>;
  /** Memberships associated with the user. For easier access of the same data, use `teams` query. */
  teamMemberships: TeamMembershipConnection;
  /** Teams the user is part of. */
  teams: TeamConnection;
  /** The local timezone of the user. */
  timezone?: Maybe<Scalars['String']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** User's profile URL. */
  url: Scalars['String'];
};


/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A user account. */
export type UserAccount = {
  __typename?: 'UserAccount';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the model was created. */
  createdAt: Scalars['DateTime'];
  /** The user's email address. */
  email: Scalars['String'];
  /** The models identifier. */
  id: Scalars['ID'];
  /** The user's name. */
  name?: Maybe<Scalars['String']>;
  /** The authentication service used to create the account. */
  service: Scalars['String'];
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime'];
};

/** [INTERNAL] An email change verification challenge. */
export type UserAccountEmailChange = {
  __typename?: 'UserAccountEmailChange';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The timestamp this verification challenge was canceled at. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The timestamp the verification codes expire at. */
  expiresAt: Scalars['DateTime'];
  /** The model's identifier. */
  id: Scalars['ID'];
  /** The new email the user account wants to change to. */
  newEmail: Scalars['String'];
  /** The timestamp the new email was verified at. */
  newEmailVerifiedAt?: Maybe<Scalars['DateTime']>;
  /** The user account's current email. */
  oldEmail: Scalars['String'];
  /** The timestamp the old email was verified at. */
  oldEmailVerifiedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime'];
};

export type UserAdminPayload = {
  __typename?: 'UserAdminPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  __typename?: 'UserAuthorizedApplication';
  /** Error associated with the application needing to be requested for approval in the workspace */
  approvalErrorCode?: Maybe<Scalars['String']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Whether the application was created by Linear. */
  createdByLinear: Scalars['Boolean'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** OAuth application's ID. */
  id: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars['Boolean'];
  /** Application name. */
  name: Scalars['String'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean'];
};

/** User filtering options. */
export type UserCollectionFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserCollectionFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by all users. */
  every?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserCollectionFilter>>;
  /** Filters that needs to be matched by some users. */
  some?: InputMaybe<UserFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export enum UserContextViewType {
  Assigned = 'assigned'
}

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: User;
};

/** User filtering options. */
export type UserFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** The types of flags that the user can have. */
export enum UserFlagType {
  All = 'all',
  AnalyticsWelcomeDismissed = 'analyticsWelcomeDismissed',
  CanPlaySnake = 'canPlaySnake',
  CanPlayTetris = 'canPlayTetris',
  CompletedOnboarding = 'completedOnboarding',
  CycleWelcomeDismissed = 'cycleWelcomeDismissed',
  DesktopDownloadToastDismissed = 'desktopDownloadToastDismissed',
  DesktopInstalled = 'desktopInstalled',
  DesktopTabsOnboardingDismissed = 'desktopTabsOnboardingDismissed',
  DueDateShortcutMigration = 'dueDateShortcutMigration',
  EmptyActiveIssuesDismissed = 'emptyActiveIssuesDismissed',
  EmptyBacklogDismissed = 'emptyBacklogDismissed',
  EmptyCustomViewsDismissed = 'emptyCustomViewsDismissed',
  EmptyMyIssuesDismissed = 'emptyMyIssuesDismissed',
  FigmaPluginBannerDismissed = 'figmaPluginBannerDismissed',
  FigmaPromptDismissed = 'figmaPromptDismissed',
  HelpIslandFeatureInsightsDismissed = 'helpIslandFeatureInsightsDismissed',
  ImportBannerDismissed = 'importBannerDismissed',
  InsightsHelpDismissed = 'insightsHelpDismissed',
  InsightsWelcomeDismissed = 'insightsWelcomeDismissed',
  IssueLabelSuggestionUsed = 'issueLabelSuggestionUsed',
  IssueMovePromptCompleted = 'issueMovePromptCompleted',
  JoinTeamIntroductionDismissed = 'joinTeamIntroductionDismissed',
  ListSelectionTip = 'listSelectionTip',
  MigrateThemePreference = 'migrateThemePreference',
  MilestoneOnboardingIsSeenAndDismissed = 'milestoneOnboardingIsSeenAndDismissed',
  ProjectBacklogWelcomeDismissed = 'projectBacklogWelcomeDismissed',
  ProjectBoardOnboardingIsSeenAndDismissed = 'projectBoardOnboardingIsSeenAndDismissed',
  ProjectUpdatesWelcomeDismissed = 'projectUpdatesWelcomeDismissed',
  ProjectWelcomeDismissed = 'projectWelcomeDismissed',
  RewindBannerDismissed = 'rewindBannerDismissed',
  SlackCommentReactionTipShown = 'slackCommentReactionTipShown',
  TeamsPageIntroductionDismissed = 'teamsPageIntroductionDismissed',
  ThreadedCommentsNudgeIsSeen = 'threadedCommentsNudgeIsSeen',
  TriageWelcomeDismissed = 'triageWelcomeDismissed',
  TryCyclesDismissed = 'tryCyclesDismissed',
  TryGithubDismissed = 'tryGithubDismissed',
  TryInvitePeopleDismissed = 'tryInvitePeopleDismissed',
  TryRoadmapsDismissed = 'tryRoadmapsDismissed',
  TryTriageDismissed = 'tryTriageDismissed',
  UpdatedSlackThreadSyncIntegration = 'updatedSlackThreadSyncIntegration'
}

/** Operations that can be applied to UserFlagType */
export enum UserFlagUpdateOperation {
  Clear = 'clear',
  Decr = 'decr',
  Incr = 'incr',
  Lock = 'lock'
}

/** A user notification subscription. */
export type UserNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'UserNotificationSubscription';
  /** Whether the subscription is active or not */
  active: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user subscribed to. */
  user: User;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The user that was created or updated. */
  user?: Maybe<User>;
};

/** The different permission roles available to users on an organization */
export enum UserRoleType {
  Admin = 'admin',
  Guest = 'guest',
  User = 'user'
}

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  __typename?: 'UserSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Hash for the user to be used in calendar URLs. */
  calendarHash?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars['JSONObject'];
  /** Whether to show full user names instead of display names. */
  showFullUserNames: Scalars['Boolean'];
  /** The email types the user has unsubscribed from. */
  unsubscribedFrom: Array<Scalars['String']>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user associated with these settings. */
  user: User;
};

export type UserSettingsFlagPayload = {
  __typename?: 'UserSettingsFlagPayload';
  /** The flag key which was updated. */
  flag: Scalars['String'];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The flag value after update. */
  value: Scalars['Int'];
};

export type UserSettingsFlagsResetPayload = {
  __typename?: 'UserSettingsFlagsResetPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type UserSettingsPayload = {
  __typename?: 'UserSettingsPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The user's settings. */
  userSettings: UserSettings;
};

export type UserSettingsUpdateInput = {
  /** The user's notification preferences. */
  notificationPreferences?: InputMaybe<Scalars['JSONObject']>;
  /** The user's settings. */
  settings?: InputMaybe<Scalars['JSONObject']>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: InputMaybe<Array<Scalars['String']>>;
  /** [Internal] The user's usage warning history. */
  usageWarningHistory?: InputMaybe<Scalars['JSONObject']>;
};

export type UserUpdateInput = {
  /** Whether the user account is active. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Whether the user account has admin privileges. */
  admin?: InputMaybe<Scalars['Boolean']>;
  /** The avatar image URL of the user. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** The user description or a short bio. */
  description?: InputMaybe<Scalars['String']>;
  /** Reason for deactivation. */
  disableReason?: InputMaybe<Scalars['String']>;
  /** The display name of the user. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The name of the user. */
  name?: InputMaybe<Scalars['String']>;
  /** The emoji part of the user status. */
  statusEmoji?: InputMaybe<Scalars['String']>;
  /** The label part of the user status. */
  statusLabel?: InputMaybe<Scalars['String']>;
  /** When the user status should be cleared. */
  statusUntilAt?: InputMaybe<Scalars['DateTime']>;
  /** The local timezone of the user. */
  timezone?: InputMaybe<Scalars['String']>;
};

/** View preferences. */
export type ViewPreferences = Node & {
  __typename?: 'ViewPreferences';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The view preference type. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The view type. */
  viewType: Scalars['String'];
};

export type ViewPreferencesCreateInput = {
  /** The custom view these view preferences are associated with. */
  customViewId?: InputMaybe<Scalars['String']>;
  /** The cycle these view preferences are associated with. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The default parameters for the insight on that view. */
  insights?: InputMaybe<Scalars['JSONObject']>;
  /** The label these view preferences are associated with. */
  labelId?: InputMaybe<Scalars['String']>;
  /** View preferences object. */
  preferences: Scalars['JSONObject'];
  /** The project these view preferences are associated with. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The roadmap these view preferences are associated with. */
  roadmapId?: InputMaybe<Scalars['String']>;
  /** The team these view preferences are associated with. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The user profile these view preferences are associated with. */
  userId?: InputMaybe<Scalars['String']>;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
};

export type ViewPreferencesPayload = {
  __typename?: 'ViewPreferencesPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = 'organization',
  User = 'user'
}

export type ViewPreferencesUpdateInput = {
  /** The default parameters for the insight on that view. */
  insights?: InputMaybe<Scalars['JSONObject']>;
  /** View preferences. */
  preferences?: InputMaybe<Scalars['JSONObject']>;
};

/** The client view this custom view is targeting. */
export enum ViewType {
  ActiveIssues = 'activeIssues',
  AllIssues = 'allIssues',
  Archive = 'archive',
  Backlog = 'backlog',
  Board = 'board',
  CompletedCycle = 'completedCycle',
  CustomRoadmap = 'customRoadmap',
  CustomView = 'customView',
  CustomViews = 'customViews',
  Cycle = 'cycle',
  Inbox = 'inbox',
  Label = 'label',
  MyIssues = 'myIssues',
  MyIssuesActivity = 'myIssuesActivity',
  MyIssuesCreatedByMe = 'myIssuesCreatedByMe',
  MyIssuesSubscribedTo = 'myIssuesSubscribedTo',
  Project = 'project',
  ProjectDocuments = 'projectDocuments',
  Projects = 'projects',
  ProjectsAll = 'projectsAll',
  ProjectsBacklog = 'projectsBacklog',
  ProjectsClosed = 'projectsClosed',
  QuickView = 'quickView',
  Roadmap = 'roadmap',
  RoadmapAll = 'roadmapAll',
  RoadmapBacklog = 'roadmapBacklog',
  RoadmapClosed = 'roadmapClosed',
  Roadmaps = 'roadmaps',
  Search = 'search',
  Teams = 'teams',
  Triage = 'triage',
  UserProfile = 'userProfile',
  UserProfileCreatedByUser = 'userProfileCreatedByUser'
}

/** A webhook used to send HTTP notifications over data updates */
export type Webhook = Node & {
  __typename?: 'Webhook';
  /** Whether the Webhook is enabled for all public teams, including teams created after the webhook was created. */
  allPublicTeams: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Whether the Webhook is enabled. */
  enabled: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Webhook label */
  label?: Maybe<Scalars['String']>;
  /** The resource types this webhook is subscribed to. */
  resourceTypes: Array<Scalars['String']>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars['String']>;
  /** The team that the webhook is associated with. If null, the webhook is associated with all public teams of the organization. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Webhook URL */
  url?: Maybe<Scalars['String']>;
};

export type WebhookConnection = {
  __typename?: 'WebhookConnection';
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookCreateInput = {
  /** Whether this webhook is enabled for all public teams. */
  allPublicTeams?: InputMaybe<Scalars['Boolean']>;
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes: Array<Scalars['String']>;
  /** A secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']>;
  /** The identifier or key of the team associated with the Webhook. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The URL that will be called on data changes. */
  url: Scalars['String'];
};

export type WebhookEdge = {
  __typename?: 'WebhookEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Webhook;
};

export type WebhookPayload = {
  __typename?: 'WebhookPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The webhook entity being mutated. */
  webhook: Webhook;
};

export type WebhookUpdateInput = {
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes?: InputMaybe<Array<Scalars['String']>>;
  /** A secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']>;
  /** The URL that will be called on data changes. */
  url?: InputMaybe<Scalars['String']>;
};

/** A condition to match for the workflow to be triggered. */
export type WorkflowCondition = {
  /** Trigger the workflow when an issue matches the filter. Can only be used when the trigger type is `Issue`. */
  issueFilter?: InputMaybe<IssueFilter>;
  /** Triggers the workflow when a project matches the filter. Can only be used when the trigger type is `Project`. */
  projectFilter?: InputMaybe<ProjectFilter>;
};

export type WorkflowCronJobDefinition = Node & {
  __typename?: 'WorkflowCronJobDefinition';
  /** An array of activities that will be executed as part of the workflow cron job. */
  activities: Scalars['JSONObject'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the workflow cron job. */
  creator: User;
  /** The description of the workflow cron job. */
  description?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The name of the workflow cron job. */
  name: Scalars['String'];
  /** Cron schedule which is used to execute the workflow cron job. */
  schedule: Scalars['JSONObject'];
  /** The sort order of the workflow cron job definition within its siblings. */
  sortOrder: Scalars['String'];
  /** The team associated with the workflow cron job. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type WorkflowCronJobDefinitionConnection = {
  __typename?: 'WorkflowCronJobDefinitionConnection';
  edges: Array<WorkflowCronJobDefinitionEdge>;
  nodes: Array<WorkflowCronJobDefinition>;
  pageInfo: PageInfo;
};

export type WorkflowCronJobDefinitionEdge = {
  __typename?: 'WorkflowCronJobDefinitionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: WorkflowCronJobDefinition;
};

export type WorkflowDefinition = Node & {
  __typename?: 'WorkflowDefinition';
  /** An array of activities that will be executed as part of the workflow. */
  activities: Scalars['JSONObject'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The conditions that need to be match for the workflow to be triggered. */
  conditions: Scalars['JSONObject'];
  /** The type of view to which this workflow's context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the workflow. */
  creator: User;
  /** The context custom view associated with the workflow. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the workflow. */
  cycle?: Maybe<Cycle>;
  /** The description of the workflow. */
  description?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  /** The name of the group that the workflow belongs to. */
  groupName?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The contextual label view associated with the workflow. */
  label?: Maybe<IssueLabel>;
  /** The name of the workflow. */
  name: Scalars['String'];
  /** The contextual project view associated with the workflow. */
  project?: Maybe<Project>;
  /** The sort order of the workflow definition within its siblings. */
  sortOrder: Scalars['String'];
  /** The team associated with the workflow. If not set, the workflow is associated with the entire organization. */
  team?: Maybe<Team>;
  /** The type of the event that triggers off the workflow. */
  trigger: WorkflowTrigger;
  /** The object type (e.g. Issue) that triggers this workflow. */
  triggerType: WorkflowTriggerType;
  /** The type of the workflow. */
  type: WorkflowType;
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The contextual user view associated with the workflow. */
  user?: Maybe<User>;
  /** The type of user view to which this workflow's context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type WorkflowDefinitionConnection = {
  __typename?: 'WorkflowDefinitionConnection';
  edges: Array<WorkflowDefinitionEdge>;
  nodes: Array<WorkflowDefinition>;
  pageInfo: PageInfo;
};

export type WorkflowDefinitionEdge = {
  __typename?: 'WorkflowDefinitionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: WorkflowDefinition;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  __typename?: 'WorkflowState';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The state's UI color as a HEX string. */
  color: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Description of the state. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Issues belonging in this state. */
  issues: IssueConnection;
  /** The state's name. */
  name: Scalars['String'];
  /** The position of the state in the team flow. */
  position: Scalars['Float'];
  /** The team to which this state belongs to. */
  team: Team;
  /** The type of the state. One of "triage", "backlog", "unstarted", "started", "completed", "canceled". */
  type: Scalars['String'];
  /**
   * The last time at which the entity was meaningfully updated, i.e. for all changes of syncable properties except those
   *     for which updates should not produce an update to updatedAt (see skipUpdatedAtKeys). This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type WorkflowStateArchivePayload = ArchivePayload & {
  __typename?: 'WorkflowStateArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<WorkflowState>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type WorkflowStateConnection = {
  __typename?: 'WorkflowStateConnection';
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateCreateInput = {
  /** The color of the state. */
  color: Scalars['String'];
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the state. */
  name: Scalars['String'];
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']>;
  /** The team associated with the state. */
  teamId: Scalars['String'];
  /** The workflow type. */
  type: Scalars['String'];
};

export type WorkflowStateEdge = {
  __typename?: 'WorkflowStateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: WorkflowState;
};

/** Workflow state filtering options. */
export type WorkflowStateFilter = {
  /** Compound filters, all of which need to be matched by the workflow state. */
  and?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the workflow state description. */
  description?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the workflow states issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the workflow state name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the workflow state. */
  or?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the workflow state position. */
  position?: InputMaybe<NumberComparator>;
  /** Filters that the workflow states team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the workflow state type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type WorkflowStatePayload = {
  __typename?: 'WorkflowStatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
};

export type WorkflowStateUpdateInput = {
  /** The color of the state. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the state. */
  name?: InputMaybe<Scalars['String']>;
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']>;
};

export enum WorkflowTrigger {
  EntityCreated = 'entityCreated',
  EntityCreatedOrUpdated = 'entityCreatedOrUpdated',
  EntityRemoved = 'entityRemoved',
  EntityUnarchived = 'entityUnarchived',
  EntityUpdated = 'entityUpdated'
}

export enum WorkflowTriggerType {
  Issue = 'issue',
  Project = 'project'
}

export enum WorkflowType {
  Custom = 'custom',
  Sla = 'sla',
  ViewSubscription = 'viewSubscription'
}

/** [INTERNAL] Public information of the OAuth application, plus the userIds and scopes for those users. */
export type WorkspaceAuthorizedApplication = {
  __typename?: 'WorkspaceAuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String'];
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** UserIds and membership dates of everyone who has authorized the application with the set of scopes */
  memberships: Array<AuthMembership>;
  /** Application name. */
  name: Scalars['String'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
  /** Total number of members that authorized the application */
  totalMembers: Scalars['Float'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean'];
};

/** Zendesk specific settings. */
export type ZendeskSettings = {
  __typename?: 'ZendeskSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']>;
  /** The ID of the Linear bot user. */
  botUserId?: Maybe<Scalars['String']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']>;
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String'];
};

export type ZendeskSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the Linear bot user. */
  botUserId?: InputMaybe<Scalars['String']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']>;
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String'];
};

export type TeamsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type TeamsQuery = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', description?: string | null | undefined, name: string, key: string, id: string }> } };

export type TeamConnectionFragment = { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', description?: string | null | undefined, name: string, key: string, id: string }> };

export type TeamFragment = { __typename?: 'Team', description?: string | null | undefined, name: string, key: string, id: string };

export type User_AssignedIssuesQueryVariables = Exact<{
  id: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type User_AssignedIssuesQuery = { __typename?: 'Query', user: { __typename?: 'User', assignedIssues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type GetIssueQueryVariables = Exact<{
  id: Scalars['String'];
  withComments: Scalars['Boolean'];
  historyCount: Scalars['Int'];
}>;


export type GetIssueQuery = { __typename?: 'Query', issue: { __typename?: 'Issue', archivedAt?: any | null | undefined, trashed?: boolean | null | undefined, url: string, identifier: string, createdAt: any, priorityLabel: string, previousIdentifiers: Array<string>, branchName: string, estimate?: number | null | undefined, description?: string | null | undefined, title: string, number: number, priority: number, id: string, history: { __typename?: 'IssueHistoryConnection', nodes: Array<{ __typename?: 'IssueHistory', createdAt: any, actor?: { __typename?: 'User', displayName: string } | null | undefined, fromState?: { __typename?: 'WorkflowState', id: string, name: string } | null | undefined }> }, comments?: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', body: string, createdAt: any, user?: { __typename?: 'User', displayName: string } | null | undefined }> }, project?: { __typename?: 'Project', name: string, id: string } | null | undefined, creator?: { __typename?: 'User', id: string, displayName: string } | null | undefined, cycle?: { __typename?: 'Cycle', id: string } | null | undefined, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', name: string, color: string }> }, parent?: { __typename?: 'Issue', id: string } | null | undefined, team: { __typename?: 'Team', id: string, name: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string, type: string, color: string, position: number }> } }, assignee?: { __typename?: 'User', id: string, name: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, type: string, color: string } } };

export type IssueConnectionFragment = { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> };

export type IssueFragment = { __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } };

export type GetIssueWorkflowStatesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetIssueWorkflowStatesQuery = { __typename?: 'Query', issue: { __typename?: 'Issue', identifier: string, id: string, team: { __typename?: 'Team', id: string, name: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string, type: string, color: string, position: number }> } }, assignee?: { __typename?: 'User', id: string, name: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, type: string, color: string } } };

export type IssuesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type IssuesQuery = { __typename?: 'Query', issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } };

export type TeamIssuesQueryVariables = Exact<{
  teamId: Scalars['String'];
  first: Scalars['Int'];
}>;


export type TeamIssuesQuery = { __typename?: 'Query', team: { __typename?: 'Team', name: string, issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type StatusIssuesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type StatusIssuesQuery = { __typename?: 'Query', workflowState: { __typename?: 'WorkflowState', issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type IssueSearchQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query: Scalars['String'];
}>;


export type IssueSearchQuery = { __typename?: 'Query', issueSearch: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', id: string, title: string, identifier: string }> } };

export type TeamWorkflowStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamWorkflowStatesQuery = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', id: string, name: string, key: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string }> } }> } };
