import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {

  it('should create app', () => {
      const rversePipe = new ReversePipe();
      expect(rversePipe.transform('hello')).toEqual('olleh');
  });
});
