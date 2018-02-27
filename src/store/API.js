
import Fetch from './fetch';

//发现
export const getInterestsData=()=> fetch('/static/interestsData.json');

/*首页*/

//首页推荐
export const getQuickData =()=> fetch('/static/quickData.json');
export const getRecommend = (next_date) => fetch('/rex_api/recommend_feed?alt=json&next_date=' + next_date + '&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1');



/*电影*/

//影院热映
export const getMovieShowing = () => fetch('/rex_api/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0');
//免费在线观影
export const getMovieFreeStream = () => fetch('/rex_api/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=0');
//新片速递
export const getMovieLatest = () => fetch('/rex_api/subject_collection/movie_latest/items?os=ios&start=0&count=8&loc_id=108288&_=0');
//电影分类
export const getMovieClass =()=> fetch('/static/movieClass.json');


/*图书*/

//最受关注图书-虚构
export const getBookFiction=()=> fetch('/rex_api/subject_collection/book_fiction/items?os=ios&start=0&count=8&loc_id=0&_=0');
//最受关注图书-非虚构
export const getBookNoFiction =()=> fetch('/rex_api/subject_collection/book_nonfiction/items?os=ios&start=0&count=8&loc_id=0&_=0');
//豆瓣书店
export const getProductBook =()=> fetch('/rex_api/subject_collection/market_product_book_mobile_web/items?os=ios&start=0&count=8&loc_id=0&_=0');
//图书分类
export const getBookClass =()=> fetch('/static/bookClass.json');

/*广播*/
export const getBroadcast=()=> fetch('/rex_api/status/anonymous_timeline?max_id=&ck=&for_mobile=1');


/*小组*/
export const getGroups=()=> fetch('/rex_api/group/rec_groups_for_newbies?ck=&for_mobile=1');

/*搜索*/
export const getMusicRoot = (q) => fetch('/api/music/search?count=3&q=' + q);
export const getBookRoot = (q) => fetch('/api/book/search?count=3&q=' + q);
export const getMovieRoot = (q) => fetch('/api/movie/search?count=3&q=' + q);
//搜索分类
export const getSearchClass=()=> fetch('/static/searchClass.json');

