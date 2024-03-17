type AddBookEvent = 'add_book';
type UpdateDbEvent = 'update_db';
type ShowMenuEvent = 'show_menu';
type PrintDatabaseEvent = 'print_database';
type ExitEvent = 'exit';

export type TrackingEvents =
  | AddBookEvent
  | UpdateDbEvent
  | ShowMenuEvent
  | PrintDatabaseEvent
  | ExitEvent;
