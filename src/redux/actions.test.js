import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadProblemInfo,
  loadSubmitRating,
  loadProblems,
  setProblemTitle,
  setProblemDescription,
  setRating,
  setProblems,
} from './actions';

import {
  fetchProblemInfo,
  fetchSubmitRating,
  fetchProblems,
} from '../services/api';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  let store;

  describe('loadProblemInfo', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('setProblemTitle, setProblemDescription, setRating을 실행합니다.', async () => {
      fetchProblemInfo.mockImplementation(() => ({
        problemTitle: '', problemDescription: '', rating: null,
      }));

      await store.dispatch(loadProblemInfo({ problemId: 1 }));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setProblemTitle(''));
      expect(actions[1]).toEqual(setProblemDescription(''));
      expect(actions[2]).toEqual(setRating(null));
    });
  });

  describe('loadSubmitRating', () => {
    beforeEach(() => {
      store = mockStore({});
    });
    it('setRating을 실행합니다.', async () => {
      fetchSubmitRating.mockImplementation(() => ({
        score: 100, incorrectPredictions: [],
      }));
      const submitFile = new FormData();

      await store.dispatch(loadSubmitRating(submitFile));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRating({
        score: 100, incorrectPredictions: [],
      }));
    });
  });

  describe('loadProblems', () => {
    it('서버로부터 모든 문제들을 load해 setProblems를 실행합니다.', async () => {
      fetchProblems.mockImplementation(() => ({
        problems: [{
          id: 1,
          title: '수능 성적 예측하기',
          difficulty: 0,
          category: 'regression',
        },
        {
          id: 2,
          title: '모현 아파트값 예측하기',
          difficulty: 1,
          category: 'regression',
        }],
      }));

      store = mockStore({
        problems: [],
      });

      await store.dispatch(loadProblems());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setProblems([
        {
          id: 1,
          title: '수능 성적 예측하기',
          difficulty: 0,
          category: 'regression',
        },
        {
          id: 2,
          title: '모현 아파트값 예측하기',
          difficulty: 1,
          category: 'regression',
        }]));
    });
  });
});
