export default ({ app, router, store, Vue }) => {
  Vue.directive('permission', {
    bind: function (el, binding, vnode) {
      const needPermissions = binding.value
      const permissions = JSON.parse(localStorage.getItem('permission'))
      const isAdmin = localStorage.getItem('isAdmin')
      const hasPermission = permissions.some(s => {
        return needPermissions.indexOf(s) > -1
      })
      if (!hasPermission && isAdmin == 0) {
        el.style.display = 'none'
      }
    }
  })
}
