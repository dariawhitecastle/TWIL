import _ from 'lodash';

const mockData = [
  {
    id: 1,
    profile: 'dariaCalwellProfile',
    follower: 'kimHermosilloProfile',
    media: 'Linkedin'
  },
  {
    id: 2,
    profile: 'kimHermosilloProfile',
    follower: 'dariaCalwellProfile',
    media: 'Linkedin'
  },
  {
    id: 3,
    profile: 'kimHermosilloProfile',
    follower: 'jasonAndersonProfile',
    media: 'Linkedin'
  },
  {
    id: 4,
    profile: 'rossKiserProfile',
    follower: 'dariaCalwellProfile',
    media: 'Linkedin'
  }
];

// return only profile, follower keys from the array of objects
const pullValues = (array) =>
  _.reduce(array, (acc, { profile, follower }) => {
    return acc.concat([ profile, follower ]);
  }, []);

// deduplicate my array of profiles and followers
const dedupArray = (array) => _.uniq(array);

// format array
const formatValueArray = (array) =>
  _.map(array, (string) => _.startCase(_.trimEnd(string, 'Profile')));

// map them to {value: Kim Hermosillo, label: Kim Hermosillo}
const getOptions = (array) => _.map(array, (name) => ({ value: name, label: name }));

const profileOptions = _.flow(
  pullValues,
  dedupArray,
  formatValueArray,
  getOptions
);

const options = profileOptions(mockData);
console.log(options);
