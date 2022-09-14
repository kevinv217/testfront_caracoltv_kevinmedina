import React, { useState } from "react";

import _ from "lodash";

//Datos
import datamain from "../../shared/data/test.json";

import AudioPlayer from "../../shared/components/audioControl/Audioprueba";

export default function Inicio() {
  return (
    <>
      <div className="row w-100 m-0">
        <div className=" col-md-12 imgBackgroundMain px-0 mb-3">
          {_.map(datamain.pageLead, (data) => {
            const modificarWidth =
              data.image.width < 1000 ? `${data.image.width}px` : "100%";

            return (
              <img
                src={data.image.src}
                className=""
                alt=""
                style={{
                  width: `${modificarWidth}`,
                  height: `${data.image.height}px`,
                }}
              />
            );
          })}
        </div>
        <div className="col-md-12 px-5 py-3 breadcrumbcontain">
          <nav aria-label="breadcrumb" style={{ quote: ">" }}>
            <ol class="breadcrumb breadcrumbPersonal">
              {_.map(datamain.breadcrumbs, (data, id) => {
                // console.log(data);
                let str = id >= 2 ? "color1" : "color2";

                return (
                  <li className="breadcrumb-item " aria-current="page">
                    <a href={data.href} className={str}>
                      {data.body}
                    </a>
                  </li>
                );
              })}

              {/* <li class="breadcrumb-item active" aria-current="page">
                Data
              </li>  */}
            </ol>
          </nav>
        </div>
        <div className=" col-md-12 col-sm-12 pt-3 pb-5 informacionMusic">
          <div className="row w-100 m-0">
            <div className="col-md-6 col-sm-12 informacionImg">
              <img
                className="rounded-2"
                src={datamain.lead[0].image.src}
                alt=""
                style={{
                  width: `100%`,
                  height: "100%",
                }}
              />
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-start flex-column informationGeneral">
              <h3>{datamain.headline}</h3>
              <p>{datamain.subHeadline}</p>
              <AudioPlayer />

              <section className="d-flex flex-column align-items-start justify-content-start">
                <h5 className="mt-3">compartir</h5>
                <ul className="d-flex p-0 m-0">
                  {_.map(datamain.actions[0].items, (data, id) => {
                    return (
                      <li key={id} className="me-2">
                        <a href={[data.url, data.shareHref]}>
                          <i className={`ri-${data.body}-fill`}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
