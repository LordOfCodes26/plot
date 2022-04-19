import * as Plot from "@observablehq/plot";

export default async function() {
  const timeSeries = [
    [new Date("2018-01-02"), 170.160004],
    [new Date("2018-01-03"), 172.529999],
    [new Date("2018-01-04"), 172.539993],
    [new Date("2018-01-05"), 173.440002],
    [new Date("2018-01-08"), 174.350006],
    [new Date("2018-01-09"), 174.550003],
    [new Date("2018-01-10"), 173.160004],
    [new Date("2018-01-11"), 174.589996],
    [new Date("2018-01-12"), 176.179993],
    [new Date("2018-01-16"), 177.899994],
    [new Date("2018-01-17"), 176.149994],
    [new Date("2018-01-18"), 179.369995],
    [new Date("2018-01-19"), 178.610001],
    [new Date("2018-01-22"), 177.300003],
    [new Date("2018-01-23"), 177.300003],
    [new Date("2018-01-24"), 177.250000],
    [new Date("2018-01-25"), 174.509995],
    [new Date("2018-01-26"), 172.000000],
    [new Date("2018-01-29"), 170.160004],
    [new Date("2018-01-30"), 165.529999],
    [new Date("2018-01-31"), 166.869995],
    [new Date("2018-02-01"), 167.169998],
    [new Date("2018-02-02"), 166.000000],
    [new Date("2018-02-05"), 159.100006],
    [new Date("2018-02-06"), 154.830002],
    [new Date("2018-02-07"), 163.089996],
    [new Date("2018-02-08"), 160.289993],
    [new Date("2018-02-09"), 157.070007],
    [new Date("2018-02-12"), 158.500000],
    [new Date("2018-02-13"), 161.949997],
    [new Date("2018-02-14"), 163.039993],
    [new Date("2018-02-15"), 169.789993],
    [new Date("2018-02-16"), 172.360001],
    [new Date("2018-02-20"), 172.050003],
    [new Date("2018-02-21"), 172.830002],
    [new Date("2018-02-22"), 171.800003],
    [new Date("2018-02-23"), 173.669998],
    [new Date("2018-02-26"), 176.350006],
    [new Date("2018-02-27"), 179.100006],
    [new Date("2018-02-28"), 179.259995]
  ];
  return Plot.line(timeSeries).plot();
}
