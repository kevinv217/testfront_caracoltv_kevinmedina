import React from "react";

import _ from "lodash";

export default function SubMenu({ hotTopics, social }) {
  return (
    <>
      <div className="col-md-12 col-sm-12 py-3 px-3 menutendencias">
        <div className="row">
          <div className="col-md-10 col-sm-12 d-flex">
            <h4 className="m-0">Tendencias: </h4>
            <ul className="m-0 d-flex align-items-center">
              {_.map(hotTopics, (dato, id) => {
                let str = id >= 1 ? "| " : "";

                return (
                  <li key={id}>
                    <a href={dato.url} className="px-1" target={dato.target}>
                      {str} {dato.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-2 col-sm-12 text-end pe-2 p-0">
            <ul className="m-0 d-flex align-items-center justify-content-end">
              {console.log(social[0].items)}
              {_.map(social[0].items, (dato, id) => {
                return (
                  <li key={id}>
                    <a href={dato.href} className="px-1">
                      <i className={`ri-${dato.socialService}-fill`}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
