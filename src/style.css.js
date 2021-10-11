'use strict';

export default `
*{
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}
.fadeout{
  fill: url(#lg0);
}
.card-bg{
  stroke: #dddddd;
  stroke-opacity: 1;
  fill: #fffefe;
}
.header{
  font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
  fill: #2f80ed;
}
.tw-wrapper{
  overflow: hidden;
}
.tw-header{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tw-name{
  font-weight: bold;
  font-size: 13px;
}
.tw-screen-name{
  color: rgb(101, 119, 134);
  font-size: 12px;
  margin-left: .5em;
}
.tw-text{
  color: rgb(20, 23, 26);
  font-size: 12px;
}

@media (prefers-color-scheme: dark) {
  .card-bg{
    fill: #000;
  }
  .header{
    fill: #fff;
  }
  .tw-name{
    color: rgb(255,255,255);
  }
  .tw-screen-name{
    color: rgb(172, 204, 231);
  }
  .tw-text{
    color: rgb(227, 227, 227);
  }
  .fadeout{
    fill: url(#lg1);
  }
}
`;
