/* eslint-disable react/no-array-index-key */
import React, {
  useState, useEffect, useCallback,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, PrevButton, NextButton } from './embla-carousel-buttons';

import './embla.css';

const EmblaCarousel = ({ children, enableDots = true }) => {
  const startSlideIndex = children.length > 2 ? 1 : 0;
  const [viewportRef, embla] = useEmblaCarousel({ startIndex: startSlideIndex });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla,
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {children.map((child, index) => (
              <div className={`embla__slide ${index === selectedIndex ? 'is-active' : ''}`} key={index}>
                <div className="embla__slide__inner">
                  <div
                    className="embla__slide__img"
                    alt="test alt" // TODO: replace w/ real one
                  >
                    {child}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      {enableDots && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default EmblaCarousel;
