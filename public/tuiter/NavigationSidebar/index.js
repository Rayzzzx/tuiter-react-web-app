const NavigationSidebar = () => {
     return(`

            <div class="list-group">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-t"></i></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-sharp fa-solid fa-house"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Home</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action active">
                    <span style="float:left"><i class="fa-solid fa-hashtag"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Explore</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-solid fa-bell"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Notifications</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-solid fa-message"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Messages</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-solid fa-bookmark"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Bookmarks</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-solid fa-list"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Lists</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-solid fa-user"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">Profile</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <span style="float:left"><i class="fa-solid fa-circle-info"></i></span>
                    <span class="d-none d-xxl-block wd-margin-left">More</span></a>
                <button type="button" class="btn btn-primary mt-3 rounded-pill">Tuit</button>
            </div>
            

        
 `);
}

$(NavigationSidebar);
export default NavigationSidebar;