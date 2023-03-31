import { describe, it } from 'vitest';
import { TSearchBarState } from './component';

describe('Type definitions', () => {
  it('TSearchBarState should have an `inputValue` property of type `string`', () => {
    const searchBarState: TSearchBarState = {
      inputValue: '',
    };
    expect(searchBarState.inputValue).toEqual(expect.any(String));
  });
});
