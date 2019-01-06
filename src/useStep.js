import { useStep } from 'react-hooks-helper';
// import { useState, useEffect } from 'react';

// const error = msg => console.error(msg);

// const getIndexById = (arr, matchId) =>
//   arr.findIndex(({ id }) => id === matchId);

// const useStep = ({
//   initialStep = 0, // accept number or string (if string convert to index)
//   autoAdvanceDuration: autoAdvanceDurationProp = 0,
//   steps: stepsProp,
// }) => {
//   if (process.env.NODE_ENV !== 'production') {
//     if (!Array.isArray(stepsProp) && !Number.isInteger(stepsProp)) {
//       error(
//         'useStep: You must specify either an array or an integer for `steps`'
//       );
//     }
//   }

//   const steps =
//     typeof stepsProp === 'number'
//       ? new Array(stepsProp).fill(null).map((_, id) => ({
//           id,
//           autoAdvanceDuration: autoAdvanceDurationProp,
//         }))
//       : stepsProp;

//   const initialStepIndex =
//     typeof initialStep === 'number'
//       ? initialStep
//       : getIndexById(steps, initialStep);

//   if (process.env.NODE_ENV !== 'production') {
//     if (typeof initialStep === 'string' && initialStepIndex === -1) {
//       error(
//         `useStep: id of "${initialStep}" specified in initialStep not found in steps`
//       );
//     }
//   }

//   const [index, setStep] = useState(initialStepIndex);
//   const [isPaused, setPaused] = useState(false);

//   const step = steps[index];
//   const { autoAdvanceDuration } = step;

//   const deltaSetStep = (delta = 1) => {
//     setStep((index + steps.length + delta) % steps.length);
//   };

//   useEffect(
//     () => {
//       const timer =
//         !isPaused && autoAdvanceDuration
//           ? setTimeout(deltaSetStep, autoAdvanceDuration)
//           : null;
//       return () => clearTimeout(timer);
//     },
//     [index, isPaused]
//   );

//   const navigation = {
//     next: () => deltaSetStep(1),
//     previous: () => deltaSetStep(-1),
//     go: newStep => {
//       if (typeof newStep === 'number') {
//         if (process.env.NODE_ENV !== 'production') {
//           if (newStep < 0 || newStep > steps.length) {
//             error(`useStep: Index out of range in go(${newStep})`);
//           }
//         }
//         setStep(newStep);
//       } else {
//         const newStepId = getIndexById(steps, newStep);
//         if (process.env.NODE_ENV !== 'production') {
//           if (newStepId === -1) {
//             error(`useStep: go("${newStep}") not found in steps`);
//           }
//         }
//         setStep(newStepId);
//       }
//     },
//     play: () => setPaused(false),
//     pause: () => setPaused(true),
//   };

//   return {
//     isPaused,
//     index,
//     step,
//     navigation,
//   };
// };

export default useStep;
