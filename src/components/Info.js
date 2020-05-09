const Info = {
  MaxTemp: {
    title: 'Max Temperature',
    figure: 'assets/img/Fig1.png',
    alt: 'MaxTemp',
    description: [
      'As expected, the weather becomes significantly warmer as',
      ' on approaches the equator (0 Deg. Latitude).',
      ' More interestingly, however, is the fact that the southern hemispere',
      ' tends to be warmer this time of the year than the northern hemisphere.',
      ' This may be due to the tilt of the earth at the time of the year this',
      ' data was gathered.',
    ],
  },
  Humidity: {
    title: 'Humidity',
    figure: 'assets/img/Fig2.png',
    alt: 'Humidity',
    description: [
      ' Latitude and Humidity relationship from traditional data',
      ' shows the relative humidty is higher at polar regions than at 30 degree',
      ' latitude, while the specific humidity is higher at 30 degree than at',
      ' polar regions. Note that not all regions of the earth around 30 degree',
      ' latitude are desert. However, the data collected and shown here would',
      ' not match with any of traditional data. In the data, it appears that',
      ' humdity is high or saturated over all latitude. It may be related with',
      ' recent climate changes or insufficient data collected.',
    ],
  },
  Cloudiness: {
    title: 'Cloudiness',
    figure: 'assets/img/Fig3.png',
    alt: 'Cloudiness',
    description: [
      'Cloud cover (also known as cloudiness, cloudage, or cloud amount)',
      ' refers to the fraction of the sky obscured by clouds when observed',
      ' from a particular location. The cloud cover is correlated to the',
      ' sunshine duration as the least cloudy locales are the sunniest ones',
      ' while the cloudiest areas are the least sunny places.',
      'The plot does not provide much insight into the relationship between',
      ' Latitude and Cloudiness. We can see some clusters around 0 %',
      ' cloudiness that are between -40 and -20 degrees and again at 40 to',
      ' 60 degrees latitidue; we would expect elevated cloudiness further',
      ' away from the equator. An alternative in this case would be to plot',
      ' against Longitude or a 3D plane with Longitude and Latitude.',
    ],
  },
  WindSpeed: {
    title: 'Wind Speed',
    figure: 'assets/img/Fig4.png',
    alt: 'WindSpeed',
    description: [
      'The plot does not provide much insight into the relationship between',
      ' Latitude and Wind Speed. We can see some clusters around -20 to + 20',
      ' degrees but no real relationship. An alternative in this case would be',
      ' to plot against Longitude or a 3D plane with Longitude and Latitude.',
    ],
  },
};

export default Info;
