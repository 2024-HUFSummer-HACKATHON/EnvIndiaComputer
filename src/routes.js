import Donate from "./pages/Donate";
import DonateCelebrate from "./pages/DonateCelebrate";
import DonateCompleted from "./pages/DonateCompleted";
import Main from "./pages/Main";
import PastRanking from "./pages/PastRanking";
import PastRankingList from "./pages/PastRankingList";
import Ranking from "./pages/Ranking";
import Sitemap from "./pages/Sitemap";

import Test from "./pages/Test";


const routes = [
    {
        path: '/',
        element: <Sitemap />,
    },
    {
        path: '/main',
        element: <Main />,
        name: '01. 메인 페이지'
    },
    {
        path: '/donate',
        element: <Donate />,
        name: '02-1. 기부 설명 페이지'
    },
    {
        path: '/donate/completed',
        element: <DonateCompleted />,
        name: '02-2. 기부완료 페이지'
    },
    {
        path: '/donate/celebrate',
        element: <DonateCelebrate />,
        name: '02-3. 축하 페이지'
    },
    {
        path: '/ranking',
        element: <Ranking />,
        name: '03-1. 이번달 명예의 전당 페이지'
    },
    {
        path: '/pastrankinglist',
        element: <PastRankingList />,
        name: '03-2. 과거 명예의 전당 리스트 페이지'
    },
    {
        path: '/pastranking',
        element: <PastRanking />,
        name: '03-3. 과거 명예의 전당 페이지'
    },
    {
        path:'/test',
        element:<Test />,
        name:'test page'
    }
]

export default routes;