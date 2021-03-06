import Store from './store';

const Actions = {
  goTo(page, params, hash, statusCode) {
    Store.setPage(page, params, hash, statusCode);
  },
  loadData(itemsToLoad) {
    Store.loadData(itemsToLoad || []);
  },
  setBlogCategoryTo(id) {
    Store.setBlogCategoryTo(id);
  },
  setSearchQueryTo(string) {
    Store.setSearchQueryTo(string);
  },
  showNavOverlay() {
    Store.showNavOverlay();
  },
  closeTakeover() {
    Store.closeTakeover();
  },
  closeModal() {
    Store.closeModal();
  },
  getJobDetails(jid) {
    Store.getJobDetails(jid);
  },
  showSearch() {
    Store.showSearch();
  },
  hideSearch() {
    Store.hideSearch();
  },
  showBlogCategories() {
    Store.showBlogCategories();
  },
  loadMorePosts() {
    Store.loadMorePosts();
  },
  resetPosts() {
    Store.resetPosts();
  },
  loadMoreEvents() {
    Store.loadMoreEvents();
  },
  loadMoreArchivedEvents() {
    Store.loadMoreArchivedEvents();
  },
  setEventsStudioTo(id) {
    Store.setEventsStudioTo(id);
  },
  venturesPosition(position) {
    Store.venturesPosition(position);
  },
  showPopup(name) {
    Store.showPopup(name);
  },
  closePopup() {
    Store.closePopup();
  },
  menuHover(name) {
    Store.menuHover(name);
  },
  heroVideoReady(bool) {
    Store.heroVideoReady(bool);
  },
  homeIntroVideoViewed() {
    Store.homeIntroVideoViewed();
  },
  homeLoaderShown() {
    Store.homeLoaderShown();
  },
  overflowHidden() {
    Store.overflowHidden();
  },
  overflowAuto() {
    Store.overflowAuto();
  },
  showVideoOverlay(src) {
    Store.showVideoOverlay(src);
  },
  setWindowHeight(number) {
    Store.setWindowHeight(number);
  },
  visitedWorkCapabilities(bool) {
    Store.visitedWorkCapabilities(bool);
  }
};

export default Actions;
