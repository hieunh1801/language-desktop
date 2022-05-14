export interface Translate {}

export interface ModelSpecification {}

export interface ModelTracking {
  checkpoint_md5: string;
  launch_doc: string;
}

export interface TranslationEngineDebugInfo {
  model_tracking: ModelTracking;
}

export interface Sentence {
  trans: string;
  orig: string;
  backend: number;
  model_specification: ModelSpecification[];
  translation_engine_debug_info: TranslationEngineDebugInfo[];
}

export interface Spell {}

export interface RootObject {
  sentences: Sentence[];
  src: string;
  spell: Spell;
}
