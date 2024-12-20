export type TPerform = {
  id: string;
  film_id: string;
  cinema_id: string;
  cinema_room_id: string;
  start_time: string;
  end_time: string;
  translate_type: ETranslate;
  view_type: EView;
  price: string;
};

export enum ETranslate {
  VOICEOVER = 'voiceover',
  NARRATION = 'narration',
  SUBTITLE = 'subtitle',
}

export enum EView {
  V2D = '2d',
  V3D = '3d',
  IMAX = 'imax',
}
