import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import { ReactSVGPanZoom } from "react-svg-pan-zoom";

const Diagram = (props) => {
  const mapDataToSvg = (source) => {
    if (source && source.length > 0) {
      source.forEach((i) => {
        replacer(i.id, i.value);
      });
    } else {
      replaceDefault();
    }
  };

  const replacer = (id, value) => {
    let elms = document.querySelectorAll(`[id='${id}']`);
    // for (var i = 0; i < elms.length; i++) elms[i].textContent = value;

    for (const element of elms) {
      // console.log(element);
      element.textContent = value;
    }
  };

  const replaceDefault = () => {
    // var obj = [
    //   {
    //     id: '91-1-440',
    //     textContent: '948.8 t/h',
    //   },
    //   {
    //     id: 'tspan453',
    //     textContent: '948.8 t/h',
    //   },
    // ];

    let obj = document.getElementsByTagName("tspan");

    for (let o of obj) {
      var lastFive = o.id.slice(0, 5);
      if (lastFive !== "tspan") {
        console.log("true");

        let unit = o.textContent.split(/\s+/g)[1];
        let value = `0 ${unit}`;
        replacer(o.id, value);
      } else {
        // Do Nothing
      }
    }
  };

  // This will only re-run if the value of `props.data` changes
  useEffect(() => {
    mapDataToSvg(props.data);
  }, [props.data]);

  const {
    baseURL,
    cacheRequests,
    description,
    loader,
    onError,
    // onLoad,
    url,
    title,
    uniqueHash,
    uniquifyIDs,
    // data,
    className
  } = props;

  return (
    <>
      <SVG
        className={className}
        baseURL={baseURL}
        cacheRequests={cacheRequests}
        description={description}
        loader={loader}
        onError={(error) => {
          onError(error.message);
        }}
        onLoad={(src, hasCache) => {
          setTimeout(() => {
            mapDataToSvg(props.data);
          }, 500);
        }}
        src={url}
        title={title}
        uniqueHash={uniqueHash}
        uniquifyIDs={uniquifyIDs}
      />
    </>
  );
};

Diagram.defaultProps = {
  url: "",
  data: [],
  title: "",
  description: "",
  uniqueHash: "",
  className: "w-full p-10",
  action: (props) => console.log(props.data),
  onError: (error) => console.log(error.message),
  onLoad: (src, hasCache) => console.log(src, hasCache)
};

export default Diagram;
