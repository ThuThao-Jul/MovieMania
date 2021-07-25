import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container py-5">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" class="mb-3" />
            <p class="font-italic text-muted">
              Welcome to Movie Mania, Where you can find information of all
              Movies even for "super old" movie.
            </p>
            <ul class="list-inline mt-4">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="twitter">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="instagram">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="pinterest">
                  <i class="fa fa-pinterest"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="vimeo">
                  <i class="fa fa-vimeo"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6
              class="text-uppercase font-weight-bold mb-4"
              style={{ color: "white" }}
            >
              Movies
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Up Comming
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Lated
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  On Trending
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6
              class="text-uppercase font-weight-bold mb-4"
              style={{ color: "white" }}
            >
              Categories
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Action
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Adventure
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Romantic
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Fantasy
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6
              class="text-uppercase font-weight-bold mb-4"
              style={{ color: "white" }}
            >
              Newsletter
            </h6>
            <p class="text-muted mb-4">
              If you have any question, feel free to contact us. We will try our
              best to contact and answer your question.
            </p>
            <div class="p-1 rounded border">
              <div class="input-group">
                <input
                  type="email"
                  placeholder="Enter your question"
                  aria-describedby="button-addon1"
                  class="form-control border-0 shadow-0"
                />
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
