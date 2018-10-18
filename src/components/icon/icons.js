// @flow

export const icons = Object.freeze({
  close:
    'M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z',
  'user-circle':
    'M512 820c106 0 200-56 256-138-2-84-172-132-256-132-86 0-254 48-256 132 56 82 150 138 256 138zM512 214c-70 0-128 58-128 128s58 128 128 128 128-58 128-128-58-128-128-128zM512 86c236 0 426 190 426 426s-190 426-426 426-426-190-426-426 190-426 426-426z',
  'plus-circle':
    'M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86c236 0 426 190 426 426s-190 426-426 426-426-190-426-426 190-426 426-426z',
  edit:
    'M884 300l-78 78-160-160 78-78c16-16 44-16 60 0l100 100c16 16 16 44 0 60zM128 736l472-472 160 160-472 472h-160v-160z',
  checkmark: 'M384 692l452-454 60 60-512 512-238-238 58-60z',
  'remove-circle':
    'M726 554v-84h-428v84h428zM512 86c236 0 426 190 426 426s-190 426-426 426-426-190-426-426 190-426 426-426z',
  'warning-circle':
    'M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86c236 0 426 190 426 426s-190 426-426 426-426-190-426-426 190-426 426-426z',
  'ask-circle':
    'M642 480c24-24 40-58 40-96 0-94-76-170-170-170s-170 76-170 170h84c0-46 40-86 86-86s86 40 86 86c0 24-10 44-26 60l-52 54c-30 32-50 74-50 120v22h84c0-64 20-88 50-120zM554 810v-84h-84v84h84zM512 86c236 0 426 190 426 426s-190 426-426 426-426-190-426-426 190-426 426-426z',
  'more-h':
    'M512 426c46 0 86 40 86 86s-40 86-86 86-86-40-86-86 40-86 86-86zM768 426c46 0 86 40 86 86s-40 86-86 86-86-40-86-86 40-86 86-86zM256 426c46 0 86 40 86 86s-40 86-86 86-86-40-86-86 40-86 86-86z',
  'more-v':
    'M512 682c46 0 86 40 86 86s-40 86-86 86-86-40-86-86 40-86 86-86zM512 426c46 0 86 40 86 86s-40 86-86 86-86-40-86-86 40-86 86-86zM512 342c-46 0-86-40-86-86s40-86 86-86 86 40 86 86-40 86-86 86z',
  user:
    'M512 554c114 0 342 58 342 172v128h-684v-128c0-114 228-172 342-172zM512 170c94 0 170 78 170 172s-76 170-170 170-170-76-170-170 76-172 170-172zM512 636c-126 0-260 62-260 90v46h520v-46c0-28-134-90-260-90zM512 252c-50 0-90 40-90 90s40 88 90 88 90-38 90-88-40-90-90-90z'
});

export type IconName = $Keys<typeof icons>;
export type IconCollection = { [name: IconName]: string };
