export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'jshdu218dh18hdeiahsd',
        user: {
          name: 'Cristiane',
          email: 'cristianenavescardoso09@gmail.com',
        },
      });
    }, 2000);
  });
}
