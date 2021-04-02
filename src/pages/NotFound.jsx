import React from "react";

function NotFound() {
  return (
    <div>
      <div class="tile is-ancestor m-6">
        <div class="tile is-vertical is-8 m-6">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <div className="tile">
                <article class="tile is-child notification is-danger">
                  <p class="title">404</p>
                  <p class="subtitle">Oups !</p>
                  <div class="content"></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
