import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HACKTOBERFEST_BANNER_END,
  isHacktoberfestBannerActive,
} from '../src/components/events/hacktoberfestSchedule.ts';

test('the home banner ends exactly one week after the event closes in Panama', () => {
  assert.equal(HACKTOBERFEST_BANNER_END, Date.parse('2026-11-07T20:00:00Z'));
  assert.equal(isHacktoberfestBannerActive(HACKTOBERFEST_BANNER_END - 1), true);
  assert.equal(isHacktoberfestBannerActive(HACKTOBERFEST_BANNER_END), false);
});
