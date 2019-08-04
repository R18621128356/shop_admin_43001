import axios from 'axios'

export default {
  data () {
    return {
      // 用户列表数据
      userData: [{
        userName: '景超',
        email: 'jingchao@.com',
        mobile: '123456789'
      }],
      // 总个数
      total: 0,
      // 当前页
      pagenum: 1,
      // 输入框绑定的数据
      input3: ''
    }
  },
  created () {
    this.getUsersData()
  },
  // 方法
  methods: {
    // 加载用户数据列表
    getUsersData (pagenum = 1, query = '') {
      axios.get('http://localhost:8888/api/private/v1/users', {
        params: {
          query,
          pagenum, // 当前页
          pagesize: 2
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        // 保存用户列表数据
        this.usersData = res.data.data.users
        // 保存总个数
        this.total = res.data.data.total
        // 保存当前页
        this.pagenum = res.data.data.pagenum
      })
    },
    // 点击分页
    currentPageChange (curPage) {
      console.log('点击分页', curPage)
      this.getUsersData(curPage, this.input3)
    },
    // 输入内容开始搜索
    startSearch () {
      console.log(this.input3)

      // 请求数据
      this.getUsersData(1, this.input3)
    }

  }

}
