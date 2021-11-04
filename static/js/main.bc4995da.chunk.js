(this.webpackJsonpspace_xclone=this.webpackJsonpspace_xclone||[]).push([[0],{10:function(e,s,c){},12:function(e,s,c){"use strict";c.r(s);var i=c(1),a=c.n(i),t=c(4),n=c.n(t),l=(c(9),c(2)),A=(c(10),c.p+"static/media/logo.e548eb03.png"),d=c(0);var r=function(){var e=a.a.useState([]),s=Object(l.a)(e,2),c=s[0],t=s[1],n=a.a.useState(0),r=Object(l.a)(n,2),h=r[0],j=r[1],o=Object(i.useState)(!0),m=Object(l.a)(o,2),b=m[0],O=m[1];return a.a.useEffect((function(){fetch("https://api.spacex.land/graphql/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n{\n  launchesPast(limit: 100) {\n    mission_name\n    launch_date_local\n    launch_site {\n      site_name\n      site_name_long\n    }\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n    }\n    ships {\n      name\n      home_port\n      image\n      type\n      year_built\n    }\n    launch_date_utc\n  }\n}\n\n"})}).then((function(e){return e.json()})).then((function(e){return t(e.data.launchesPast)})).then((function(){return O(!1)}))}),[]),console.log(c),Object(d.jsx)("div",{children:b?Object(d.jsx)("div",{children:" is loading "}):Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"container-1",children:[Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("img",{className:"arrow-left",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflChsROBEnPr3gAAADq0lEQVR42u3dvWoUYRjF8TOrIkFFMJWF2fgNgp0fWChRsTHY2+QuvATvwkpBtLGxkGgRRElpK0QRg0lkq0TQDUTxPTYJLApxNtl532Sf/+8GZk7OycxkUoyERtitln33rtOLF3anY//8aS8s2E+e2BMTpc8PDbKPHrVnZ72px4/tkZHS54oBc2q37c+fXcvbt04HD5Y+ZwyI09iY06dP9crfMDvrdOhQ6XPHNm2tfEYwFLZXPiPY1fq75//PzIzTvn2lM6GmwZa/4f790rlQQzPl23a3a4+Ols6HTTRX/ro0NZUrS6v0D3O3cRobk2ZmpPHxxg5SnTuXK8/eXAcaBk7ttqrXrxstX5KU7w0hV4Ca8pUvSV++lM6LHo3f8/95Bjh/vnRmrBvMS55+vHxZOjPWZf/N9/Ky06lTpXNDJcr//t3p6tXSuaESl/1u175+vXRuiPJDo/zAKD8wyg+M8gOj/MAoPzDKD4zyA6P8wCg/MMoPjPIDo/zAKD8wyg+M8gOj/MAoPzDKD4zyA6P8wCg/MMoPjPIDo/zAKD8wyg+M8gOj/MAoPzDKD4zyA6P8wCg/MMoPjPIDo/zAKD8wyg+M8gOzjxyxP3zI1n368cPp2rXSubHOfvSI8oOyx8ft378pf2fJ+MWQyUmp1fzx3O1Kt29XrTdv8mXbvfINwCdONH+Q1VVVd+5Qfn1D9s2gX7/k1dXSZ7Gb5BtANT/f/EEOH1Y1Pe108WK2XKjHPnnSTinPnwArK4xgB7KfPs0zAEawI9mjo3nfAn775nT5cunc6OF05oy9tMQIAmMEYARgBBAjgBgBxAggRgAxAogRQIwAYgQQI4AYAcQIIEYAMQKIEUClRnDpUunc6MEIwAjACCBGADECiBFAjABiBBAjgDZGsLjICAJzOn2aEQTHCMAIwAggRgAxAogRQIwAYgQQI4AYAcQIIEYASfbZs3n/lbyy4nThQunc6JF/BJ2O07FjpXOjR/bbQXr2rHRm/CXvlSAl+/jxXNmG7JMxzaiquTnpxg3p69ccR5Nu3cqVjQHUlHcE+Z4DGEAfqmpuTp6YkJaWmj1Svg9fMYA+Va2PH6WbN5u9Erx/Xzon/qO5B8PlZfvAgdL5UEMjI0j37pXOhT4MdgTPn9sZPq+LwRrIy6L06pU9MlI6C7ZoWyOg/OGwpRFQ/nDp65mA8oeTU7ttv3u3efkPHjjt31/6XNEQe88ep6kpe3ra7nTstTV7ft5++NC+cqX0+W34AwKIPQNVbGJ6AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTI3VDE3OjU2OjE3KzAwOjAwwi5U/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0yN1QxNzo1NjoxNyswMDowMLNz7EEAAAAASUVORK5CYII=",alt:"",onClick:function(){return h>0?j(h-1):""}}),Object(d.jsx)("a",{href:"index.html",children:Object(d.jsx)("img",{className:"logo",src:A,alt:""})}),Object(d.jsx)("img",{className:"arrow-right",src:"data:image/png;base64,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",alt:"",onClick:function(){return h<99?j(h+1):""}})]}),Object(d.jsxs)("div",{className:"mission-data",children:[Object(d.jsxs)("div",{className:"column",children:[Object(d.jsxs)("div",{className:"header",children:["MISSION ",h+1+"/100"," "]}),Object(d.jsx)("div",{className:"header-content text-large",children:c[h].mission_name}),Object(d.jsx)("div",{className:"header",children:" ROCKET"}),Object(d.jsx)("div",{className:"header-content",children:Object(d.jsx)("abbr",{title:"Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world\u2019s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.\n",children:c[h].rocket.rocket_name})})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("div",{className:"header text-align-right",children:"LAUNCH DATE"}),Object(d.jsx)("div",{className:"header-content text-align-right",children:c[h].launch_date_utc.substring(0,10)}),Object(d.jsx)("div",{className:"header text-align-right",children:"LAUNCH SITE"}),Object(d.jsx)("div",{className:"header-content text-align-right",children:Object(d.jsxs)("abbr",{title:c[h].launch_site.site_name_long,children:[" ",c[h].launch_site.site_name," "]})})]})]}),Object(d.jsxs)("div",{className:"launch-image-container",children:[c[h].links.flickr_images[0]?Object(d.jsx)("img",{class:"launch-image",src:c[h].links.flickr_images[0],alt:""}):"",c[h].links.flickr_images[1]?Object(d.jsx)("img",{class:"launch-image",src:c[h].links.flickr_images[1],alt:""}):"",c[h].links.flickr_images[2]?Object(d.jsx)("img",{class:"launch-image",src:c[h].links.flickr_images[2],alt:""}):""]}),Object(d.jsxs)("div",{className:"rescue-ships",children:[Object(d.jsx)("div",{className:"header",children:"RESCUE SHIPS"}),Object(d.jsxs)("div",{className:"ship-container",children:[c[h].ships[0]?Object(d.jsxs)("div",{className:"ship-slide",children:[Object(d.jsx)("img",{className:"ship-image",src:c[h].ships[0].image,alt:""}),Object(d.jsx)("div",{className:"header-slide",children:c[h].ships[0].name}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["HOME PORT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[0].home_port})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["TYPE",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[0].type?c[h].ships[0].type:"not available"})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["YEAR BUILT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[0].year_built?c[h].ships[0].year_built:"not available"})]})})]}):Object(d.jsx)("div",{className:"header",children:"no rescue ships"}),c[h].ships[1]?Object(d.jsxs)("div",{className:"ship-slide",children:[Object(d.jsx)("img",{className:"ship-image",src:c[h].ships[1].image,alt:""}),Object(d.jsx)("div",{className:"header-slide",children:c[h].ships[1].name}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["HOME PORT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[1].home_port})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["TYPE",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[1].type?c[h].ships[1].type:"not available"})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["YEAR BUILT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[1].year_built?c[h].ships[1].year_built:"not available"})]})})]}):"",c[h].ships[2]?Object(d.jsxs)("div",{className:"ship-slide",children:[Object(d.jsx)("img",{className:"ship-image",src:c[h].ships[2].image,alt:""}),Object(d.jsx)("div",{className:"header-slide",children:c[h].ships[2].name}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["HOME PORT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[2].home_port})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["TYPE",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[2].type?c[h].ships[2].type:"not available"})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["YEAR BUILT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[2].year_built?c[h].ships[2].year_built:"not available"})]})})]}):"",c[h].ships[3]?Object(d.jsxs)("div",{className:"ship-slide",children:[Object(d.jsx)("img",{className:"ship-image",src:c[h].ships[3].image,alt:""}),Object(d.jsx)("div",{className:"header-slide",children:c[h].ships[3].name}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["HOME PORT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[3].home_port})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["TYPE",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[3].type?c[h].ships[3].type:"not available"})]})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"header-content-slide",children:["YEAR BUILT",Object(d.jsx)("div",{className:"header-content-slide-text",children:c[h].ships[3].year_built?c[h].ships[3].year_built:"not available"})]})})]}):""]})]})]}),Object(d.jsx)("div",{className:"container-2",children:Object(d.jsx)("div",{className:"mission-list",children:c.map((function(e,s){return Object(d.jsxs)("div",{class:"mission-item",onClick:function(){return j(s)},children:[e.mission_name," ",Object(d.jsxs)("span",{className:"mission-date",children:[" ",e.launch_date_local.substring(0,10)," "]})]})}))})})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(s){var c=s.getCLS,i=s.getFID,a=s.getFCP,t=s.getLCP,n=s.getTTFB;c(e),i(e),a(e),t(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(r,{})}),document.getElementById("root")),h()},9:function(e,s,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.bc4995da.chunk.js.map