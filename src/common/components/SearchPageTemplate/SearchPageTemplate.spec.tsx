import {cleanup} from '@testing-library/react-native';

describe('<SearchPageTemplate />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });
});
