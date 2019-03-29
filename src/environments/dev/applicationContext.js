import uuidv4 from 'uuid/v4';

const applicationContext = {
  getUniqueId: () => {
    return uuidv4();
  },
};

export { applicationContext };