export const barlayout = (title) => {
  return {
    title: title,
    font: {
      family: "Raleway, sans-serif",
      color: "black",
    },
    barmode: "group",
    bargroupgap: 0.1,
    xaxis: {
      title: "Dates",
      titlefont: {
        size: 16,
        color: "rgb(107, 107, 107)",
      },
      tickfont: {
        size: 8,
        color: "rgb(107, 107, 107)",
      },
    },
    yaxis: {
      tickfont: {
        size: 8,
        color: "rgb(107, 107, 107)",
      },
    },
  };
};

export const lineLayout = (title) => {
  return {
    width: 500,
    height: 450,
    title: title,
    font: {
      family: "Raleway, sans-serif",
      color: "black",
    },
    xaxis: {
      title: "Dates",
      titlefont: {
        size: 16,
        color: "rgb(107, 107, 107)",
      },
      tickfont: {
        size: 8,
        color: "rgb(107, 107, 107)",
      },
    },
    yaxis: {
      tickfont: {
        size: 8,
        color: "rgb(107, 107, 107)",
      },
    },
  };
};
