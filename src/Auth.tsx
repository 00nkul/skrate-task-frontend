const Auth = {
    isAuthenticated: false,
    authnticate() {
        if (localStorage.getItem('uid')) {
            this.isAuthenticated = true;
        }
    },
    checkAuth() {
        this.authnticate();
        return this.isAuthenticated;
    }
}

export default Auth;