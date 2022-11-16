export const barlayout = (title) => {
  return {
    title: title,
    width: 550,
    height: 400,
    paper_bgcolor: "#161b22",
    plot_bgcolor: "#161b22",
    font: {
      family: "Raleway, sans-serif",
      color: "white",
    },
    barmode: "group",
    bargroupgap: 0.1,
    xaxis: {
      title: "Dates",
      titlefont: {
        size: 16,
        color: "#8b949e",
      },
      tickfont: {
        size: 8,
        color: "#8b949e",
      },
    },
    yaxis: {
      tickfont: {
        size: 8,
        color: "#8b949e",
      },
    },
  };
};

export const lineLayout = (title) => {
  return {
    width: 550,
    height: 400,
    paper_bgcolor: "#161b22",
    plot_bgcolor: "#161b22",
    title: title,
    font: {
      family: "Raleway, sans-serif",
      color: "white",
    },
    xaxis: {
      title: "Dates",
      titlefont: {
        size: 16,
        color: "#8b949e",
      },
      tickfont: {
        size: 8,
        color: "#8b949e",
      },
    },
    yaxis: {
      tickfont: {
        size: 8,
        color: "#8b949e",
      },
    },
  };
};
