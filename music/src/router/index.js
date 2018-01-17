import Vue from 'vue'
import Router from 'vue-router'
// import Rank from '@/components/rank/rank'
// import Recommend from '@/components/recommend/recommend'
// import Search from '@/components/search/search'
// import Singer from '@/components/singer/singer'
// import SingerDetail from '@/components/singer-detail/singer-detail'
// import Disc from '@/components/disc/disc'
// import TopList from '@/components/top-list/top-list'

const Rank = (resolve) => {
    import('@/components/rank/rank').then((module) => {
        resolve(module)
    })
}
const Recommend = (resolve) => {
    import('@/components/recommend/recommend').then((module) => {
        resolve(module)
    })
}
const Search = (resolve) => {
    import('@/components/search/search').then((module) => {
        resolve(module)
    })
}
const Singer = (resolve) => {
    import('@/components/singer/singer').then((module) => {
        resolve(module)
    })
}
const SingerDetail = (resolve) => {
    import('@/components/singer-detail/singer-detail').then((module) => {
        resolve(module)
    })
}
const Disc = (resolve) => {
    import('@/components/disc/disc').then((module) => {
        resolve(module)
    })
}
const TopList = (resolve) => {
    import('@/components/top-list/top-list').then((module) => {
        resolve(module)
    })
}


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: Recommend
    },
    {
    	path: '/rank',
    	component: Rank,
        children: [
            {
                path: ':id',
                component: TopList
            }
        ]
    },
    {
    	path: '/recommend',
    	component: Recommend,
        children: [
            {
                path: ':id',
                component: Disc
            }
        ]
    },
    {
    	path: '/search',
    	component: Search,
        children: [
            {
                path: ':id',
                component: SingerDetail
            }
        ]
    },
    {
    	path: '/singer',
    	component: Singer,
        children: [
            {
                path: ':id',
                component: SingerDetail
            }
        ]
    }
  ]
})
