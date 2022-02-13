import {
  determinateCurrentSeason,
  determinateNextSeason,
  getDaysNumberSinceStartSeason,
} from './season.module';

let currentSeason;
describe('Season Module Test', () => {
  describe('on january', () => {
    beforeAll(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(new Date(2022, 0, 1));
      currentSeason = determinateCurrentSeason();
    });

    it('returns winter season as current season', () => {
      expect(currentSeason.name).toEqual('Winter');
    });

    it('returns spring as next season', () => {
      const nextSeason = determinateNextSeason(currentSeason);
      expect(nextSeason.name).toEqual('Spring');
    });

    it('returns `11 days ago`', () => {
      const since = getDaysNumberSinceStartSeason(currentSeason);
      expect(since).toEqual('11 days ago');
    });
  });

  describe('on june', () => {
    beforeAll(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(new Date(2022, 5, 28));
      currentSeason = determinateCurrentSeason();
    });

    it('returns spring season as current season', () => {
      expect(currentSeason.name).toEqual('Summer');
    });

    it('returns spring as next season', () => {
      const nextSeason = determinateNextSeason(currentSeason);
      expect(nextSeason.name).toEqual('Autumn');
    });

    it('returns `7 days ago`', () => {
      const since = getDaysNumberSinceStartSeason(currentSeason);
      expect(since).toEqual('7 days ago');
    });
  });
});
