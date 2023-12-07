import type { Track } from '../Track';

export interface PlaybackQueueChangedEvent {
  /**
   * Queue
   */
  queue?: Track[];
}
