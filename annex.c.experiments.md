## Annex C: Error Resilience Behaviour
{:.no_count}

### Parsing Random Access Points (Informative)

This section defines additional starting points for decoding.

It is recommended that decoders should support these starting points.
(This section is marked as informative because it is not mandatory for a conformant decoder to support these starting points.)

A frame with show_existing_frame equal to 0 is defined to be parseable if the following conditions are met:

  * Either primary_ref_frame is equal to PRIMARY_REF_NONE or ref_frame_idx[ primary_ref_frame ] indicates a frame that has been parsed
  
  * Either use_ref_frame_mvs is equal to 0, or ref_frame_idx[ i ] indicates a frame that has been parsed for all i = 0..REFS_PER_FRAME-1
  
  * Either allow_warped_motion is equal to 0, or ref_frame_idx[ i ] indicates a frame that has been parsed for all i = 0..REFS_PER_FRAME-1
  (this is necessary because the motion_mode syntax parsing depends on whether the reference frame
  has been scaled - but this is not known unless the frame has been parsed)
  
  * The decoding process for the frame does not use values in RefOrderHint before they have been written
    (written either by the decoding process for the current frame, or written when a previous frame was parsed)
    
  * If the syntax element found_ref is equal to 1, ref_frame_idx[ i ] indicates a frame that has been parsed
  (this is necessary because the frame dimensions are only correct for parsed frames)
  
A frame with show_existing_frame equal to 1 is parseable if the following condition is met:

  * frame_to_show_map_idx indicates a frame that has been parsed
  
A frame being parseable means that all the syntax elements within the frame can be read correctly
(although the decoded output pixels may not be correct if reference frames are used that have not been previously decoded).

A parsing random access point is defined as being a frame:

  * that is parseable
  
  * that is followed by frames that are all parseable if parsing starts at the parsing random access point
  
It is recommended that decoders should support decoding from parsing random access points.

The result of decoding from a parsing random access point is defined as producing exactly the same output frame sizes
(and in the same order) as decoding the whole bitstream, except that any frames output before the parsing random access point shall be discarded.
As the inter prediction may depend on missing reference frames, there is not a requirement that exactly the same output samples are produced.

In certain cases (e.g. when the first frame only contains intra coded blocks), it is possible that correct output is produced,
but, in general, error concealment techniques may be required.

Decoding from a parsing random access point may be implemented as follows:

  * decoding the sequence header OBU (this may not be present in the temporal unit containing the parsing random access point, but provided in some other way),
  
  * decoding the OBUs corresponding to the parsing random access point, and all following OBUs.

For the decoding process to handle this mode of operation, the following modifications should be used: 

  * RefValid[ i ] should be set equal to 0 for i = 0..NUM_REF_FRAMES-1 before the decoding process begins
  
  * If frame_id_numbers_present_flag is equal to 1, the check described in the semantics for current_frame_id
    should be omitted when decoding the parsing random access point (because PrevFrameId will be undefined).
    
  * When the syntax element ref_order_hint[ i ] is read, RefOrderHint[ i ] is set equal to ref_order_hint[ i ].
  
  * The check described in the semantics for ref_frame_idx[ i ] (that uses RefValid to check that the reference frames are available) should be ignored
  
  * When using the inter prediction process, if RefValid[ refIdx ] is equal to 0, then 
    the motion vector scaling and block inter prediction processes are not followed. 
    Instead, preds[ refList ] should be generated using an alternative approach.
    For conformance testing, it may help to define the predicted samples in a standard way.
    The suggested approach is to fill preds[ refList ]
    with neutral gray samples, i.e. all values equal to 1 \<\< ( BitDepth - 1 ) .
