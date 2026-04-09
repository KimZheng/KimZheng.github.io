new Vue({
  el: '#kimm',
  data: {
    name: 'KimZheng',
    job: '前端工程师',
    email: '1070963419@qq.com',
    phone: '13682858617',
    avatar: '',
    bio: '热爱前端开发，专注于构建优雅、高效、用户友好的 Web 应用。拥有丰富的项目经验，擅长 Vue.js、React 等主流前端技术栈。',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/KimZheng', icon: '🐙' },
      { name: '博客', url: 'https://kimzheng.github.io/xin', icon: '📝' }
    ],
    skill: [
      { name: 'HTML', level: '掌握', shuliandu: 'label-info' }, 
      { name: 'CSS', level: '掌握', shuliandu: 'label-info' }, 
      { name: 'JavaScript', level: '熟练', shuliandu: 'label-success' }, 
      { name: 'Vue.js', level: '掌握', shuliandu: 'label-info' }, 
      { name: 'jQuery', level: '熟练', shuliandu: 'label-success' }, 
      { name: 'Bootstrap', level: '掌握', shuliandu: 'label-info' }, 
      { name: 'webpack', level: '熟练', shuliandu: 'label-success' },
      { name: 'Node.js', level: '一般', shuliandu: 'label-default' }
    ],
    experiences: [
      {
        company: '示例科技公司',
        position: '高级前端工程师',
        period: '2022 - 至今',
        description: '负责公司核心产品的前端架构设计和开发工作，带领团队完成多个重要项目。',
        projects: [
          {
            name: '企业管理系统',
            description: '基于 Vue.js 开发的企业级管理平台，支持多租户、权限管理等功能。',
            techStack: ['Vue.js', 'Element UI', 'Vuex', 'Axios']
          },
          {
            name: '数据可视化平台',
            description: '使用 ECharts 和 D3.js 构建的数据分析和可视化展示系统。',
            techStack: ['React', 'ECharts', 'D3.js', 'TypeScript']
          }
        ]
      },
      {
        company: '创新互联网公司',
        position: '前端开发工程师',
        period: '2020 - 2022',
        description: '参与电商平台的前端开发，负责商品展示、购物车、订单等核心功能模块。',
        projects: [
          {
            name: '电商平台重构',
            description: '将老旧系统重构为现代化的单页应用，提升用户体验和开发效率。',
            techStack: ['Vue.js', 'Vue Router', 'Webpack', 'Sass']
          }
        ]
      }
    ]
  }
})
