const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(data => console.log(data));

function init(option) {

  let dropdown = d3.select('#selDataset')
  console.log(dropdown);
  d3.json(url).then(({metadata, samples})=> {
    let meta = metadata.filter(obj => obj.id == option)[0];
    let sample = samples.filter(obj => obj.id == option)[0];
})
};

init()

function metdata(option) {
  d3.json(url).then((data) => {
  let metadata = data.metadata; 
  let meta = metadata.filter(obj => obj.id == option);
  console.log(meta);
  let metaone = meta[0];
  console.log(metaone);
  let panel = d3.select('.panel-body').html('');
  for (sample in metaone) {
      panel.append('h4').text(`${sample.toUpperCase()}: ${metaone[sample]}`);
    };
  })}

  metdata('940');
/**d3.json('./static/data/samples.json').then(({names})=> {
  names.forEach(name => {
    d3.select('select').append('option').text(name)
  });

  optionChanged();
});

const optionChanged = () => {
  let option = d3.select('select').node().value;
  console.log(option);

  d3.json('./static/data/samples.json').then(({metadata, samples})=> {
    let meta = metadata.filter(obj => obj.id == option)[0];
    let sample = samples.filter(obj => obj.id == option)[0];

    d3.select('.panel-body').html('');
    Object.entries(meta).forEach(([key,val]) => {
      d3.select('.panel-body').append('h4').text(`${key.toLocaleUpperCase()}: ${val}`)
    })
  });

  d3.json('./static/data/samples.json').then(({samples})=> {
  
    var data = [
    {
      x: ['sample_values'],
      y: ['otu_ids'],
      type: 'bar'
    }
  ]});
  
  Plotly.newPlot('myDiv', data);
}*/