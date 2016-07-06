import {convertFromRaw} from 'draft-js';

var rawContent =
   [
    {
      text: 'This is a Draft-based editor that supports TeX rendering.',
      type: 'unstyled',
    },
    {
      text: '',
      type: 'unstyled',
    },
    {
      text: (
        'Each TeX block below is represented as a DraftEntity object and ' +
        'rendered using Khan Academy\'s KaTeX library.'
      ),
      type: 'unstyled',
    },
    {
      text: '',
      type: 'unstyled',
    },
    {
      text: 'Click any TeX block to edit.',
      type: 'unstyled',
    },
    {
      text: ' ',
      type: 'atomic',
      entityRanges: [{offset: 0, length: 1, key: 'first'}],
    },
    {
      text: 'You can also insert a new TeX block at the cursor location.',
      type: 'unstyled',
    },
  ]

export var content = createFromBlockArray(rawContent);
