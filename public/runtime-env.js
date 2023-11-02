window.common = {
  oidcBaseURL:
    "https://secure-gateway.dev.va.antheminc.com/affwebservices/CASSO/oidc/CostofCare",
};

window.__RUNTIME_CONFIG__ = {
  REACT_APP_IDENTITY_CLIENT_ID: "00080998-c95c-12b1-80cd-a3911e870000",
  REACT_APP_AUTH_URL: `${window.common.oidcBaseURL}`,
  REACT_APP_SILENT_REDIRECT_URL: "",
  REACT_APP_LOGOFF_REDIRECT_URL: `${window.common.oidcBaseURL}` + "/introspect",
  REACT_APP_AUDIENCE: "",
  REACT_APP_BASE_API_USER_MGNT_URL:
    "https://api-coc-dev.apps.lz-np1.ent-ocp4-useast2.aws.internal.das/cocwp/api",

  REACT_APP_BASE_API_URL:
    "https://api-coc-dev.apps.lz-np1.ent-ocp4-useast2.aws.internal.das/cocwp/api",

  REACT_APP_ITD_BASE_API_URL: "",
};

IDENTITY_CONFIG = {
  authority: `${window.common.oidcBaseURL}`,
  client_id: "00080998-c95c-12b1-80cd-a3911e870000",
  client_secret: "YGCyWt10jpqid+EnRT6EB9Eu5gYA32dmCxR+gl0MFLk=",
  redirect_uri: `${window.location.origin}/cocwp/api/oidc/redirect`,
  silent_redirect_uri: `${window.__RUNTIME_CONFIG__.REACT_APP_SILENT_REDIRECT_URL}`,
  audience: `${window.__RUNTIME_CONFIG__.REACT_APP_AUDIENCE}`,
  response_type: "code",
  automaticSilentRenew: false,
  loadUserInfo: true,
  scope: "openid profile groups",
};

METADATA_OIDC = {
  issuer: `${window.common.oidcBaseURL}`,
  jwks_uri: `${window.common.oidcBaseURL}` + "/jwks",
  authorization_endpoint: `${window.common.oidcBaseURL}` + "/authorize",
  token_endpoint: `${window.common.oidcBaseURL}` + "/token",
  userinfo_endpoint: `${window.common.oidcBaseURL}` + "/userinfo",
  end_session_endpoint: `${window.common.oidcBaseURL}` + "/endsession",
  revocation_endpoint: `${window.common.oidcBaseURL}` + "/revoke",
  introspection_endpoint:
    `${window.__RUNTIME_CONFIG__.REACT_APP_AUTH_URL}` + "/introspect",
};
