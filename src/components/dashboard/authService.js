import { UserManager, WebStorageStateStore, Log } from "oidc-client";

export default class AuthService {
  UserManager;

  constructor() {
    this.UserManager = new UserManager({
      ...window.IDENTITY_CONFIG,
      userStore: new WebStorageStateStore({ store: window.sessionStorage }),
      metadata: {
        ...window.METADATA_OIDC,
      },
    });

    // Logger
    Log.logger = console;
    Log.level = Log.DEBUG;
    this.UserManager.events.addUserLoaded((user) => {
      console.log("loaded");
      console.log(user);
      if (window.location.href.indexOf("api/oidc") !== -1) {
        this.navigateToScreen();
      }
    });
    this.UserManager.events.addSilentRenewError((e) => {
      console.log("silent renew error", e.message);
    });

    this.UserManager.events.addAccessTokenExpiring(function () {
      this.UserManager.signinSilent()
        .then(function (user) {
          console.log("silent renew success", user);
        })
        .catch(function (e) {
          console.log("silent renew error", e.message);
        });
    });

    this.UserManager.events.addAccessTokenExpired(() => {

    });
  }

  signinRedirectCallback = () => {
    this.UserManager.signinRedirectCallback().then((data) => {

    });
  };

  getUser = async () => {
    const user = await this.UserManager.getUser();
    if (!user) {
      const baseUrl = window.__RUNTIME_CONFIG__.REACT_APP_BASE_API_URL;
      console.log("Base Url: " + baseUrl);
      const var_NODE_ENV = process.env.NODE_ENV;
      console.log("NODE_ENV : " + var_NODE_ENV);
      return await this.UserManager.signinRedirectCallback();
    }
    return user;
  };

  parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  signinRedirect = () => {
    localStorage.setItem("redirectUri", window.location.pathname);
    this.UserManager.signinRedirect({});
  };

  navigateToScreen = () => {
    window.location.replace("/cocwp");
  };

  isAuthenticated = () => {
    const oidcStorage = JSON.parse(
      sessionStorage.getItem(
        `oidc.user:${window.__RUNTIME_CONFIG__.REACT_APP_AUTH_URL}:${window.__RUNTIME_CONFIG__.REACT_APP_IDENTITY_CLIENT_ID}`
      )
    );

    return !!oidcStorage && !!oidcStorage.access_token;
  };

  signinSilent = () => {
    this.UserManager.signinSilent()
      .then((user) => {
        console.log("signed in", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  signinSilentCallback = () => {
    this.UserManager.signinSilentCallback();
  };

  createSigninRequest = () => {
    return this.UserManager.createSigninRequest();
  };

  logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.replace("/cocwp/loggedout?loggedout=true");
  };

  signoutRedirectCallback = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.replace("/cocwp/loggedout?loggedout=true");
  };
}
