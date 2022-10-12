import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="col-11">
                    <div class="position-relative">
                        <input type="text" class="form-control rounded-pill ps-5"
                               placeholder="Search Tuiter">
                        <i class="fa-solid fa-magnifying-glass position-absolute wd-search-icon"></i>
                    </div>
                </div>
                <div class="col-1 wd-setting-icon"><i
                        class="fa-solid fa-gear fa-xl text-primary"></i></div>
           </div>
           
           
           <ul class="nav mt-2 mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Tredning</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <!-- image with overlaid text -->
           <div class="position-relative pt-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                     alt="spaceship" width="100%">
                <h3 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h3>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
