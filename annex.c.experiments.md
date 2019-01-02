## Annex C: Error resilience behavior (informative)
{:.no_count}

### General

This annex defines additional starting points for decoding.

It is recommended that decoders should support these starting points.
(This annex is marked as informative because it is not mandatory for a conformant decoder to support these starting points.)

The intention is to allow decoders to start even when the decoded output may be corrupted.

A property of a bitstream is defined in [section C.2][].

The recommendations are expressed in [section C.3][].

The consequences for encoders are specified in [section C.4][].

The consequences for decoders are specified in [section C.5][].

### Definition of processable frames

This section defines a property of frames that is called being "processable".

Informally, a frame is processable if it is certain (based on the current state and information in the frame header)
that everything other than the sample values can be decoded correctly.

In particular, a frame that is processable will have correct values for:

  * All syntax elements

  * The size, bitdepth, subsampling structure of any output frames

  * All values written in the reference frame update process specified in [section 7.20][], except for the contents of FrameStore
  (which may or may not be correct).

In most codecs, this concept is unnecessary because it is trivial to determine if frames are processable (either because all frames are automatically processable, or because the conditions are straightforward).
However, AV1 makes greater use of state in the reference frames and so the condition for being processable is more complicated.

Formally, the property of being processable is defined as follows.

A frame with show_existing_frame equal to 0 is defined to be processable if the following conditions are met:

  * Either primary_ref_frame is equal to PRIMARY_REF_NONE or ref_frame_idx[ primary_ref_frame ] indicates a frame that has been processed

  * Either use_ref_frame_mvs is equal to 0, or ref_frame_idx[ i ] indicates a frame that has been processed for all i = 0..REFS_PER_FRAME-1

  * Either allow_warped_motion is equal to 0, or ref_frame_idx[ i ] indicates a frame that has been processed for all i = 0..REFS_PER_FRAME-1
  (this is necessary because the motion_mode syntax parsing depends on whether the reference frame
  has been scaled - but this is not known unless the frame has been processed)

  * The decoding process for the frame does not use values in RefOrderHint before they have been written
    (written either by the decoding process for the current frame, or written when a previous frame was processed)

  * If the syntax element found_ref is equal to 1, ref_frame_idx[ i ] indicates a frame that has been processed
  (this is necessary because the frame dimensions are only correct for processed frames)

A frame with show_existing_frame equal to 1 is processable if the following condition is met:

  * frame_to_show_map_idx indicates a frame that has been processed

(A frame being "processed" means that the frame was processable and has been decoded.)

### Recommendation for processable frames

It is recommended that decoders should support decoding bitstreams if the first temporal unit contains a sequence header
and all frames contained in the bitstream are processable according to the definition above.

As the inter prediction may depend on missing reference frames, there is not a requirement that exactly
the same output samples as the reference code are produced.

In certain cases (e.g. when the first frame only contains intra coded blocks), it is possible that correct output is produced,
but, in general, error concealment techniques may be required.

### Encoder consequences of processable frames

If an application chooses to use a non-key frame starting point, then the encoder needs to be careful
that the resulting bitstream is processable.

There are some features of the bitstream specification that make this easier to achieve:

  * primary_ref_frame, use_ref_frame_mvs, and allow_warped_motion can be controlled at a frame level to satisfy the corresponding conditions

  * setting error_resilient_mode equal to 1 causes the order hints to be transmitted if necessary

  * found_ref can be cleared to allow the frame resolution to be sent explicitly

### Decoder consequences of processable frames

For the decoding process to handle this mode of operation, the following modifications should be used:

  * RefValid[ i ] should be set equal to 0 for i = 0..NUM_REF_FRAMES-1 before the decoding process begins

  * If frame_id_numbers_present_flag is equal to 1, for the first frame current_frame_id should not be
  compared to PrevFrameID (because PrevFrameID is uninitialized).

  * When the syntax element ref_order_hint[ i ] is read, RefOrderHint[ i ] is set equal to ref_order_hint[ i ].

  * The requirement for bitstream conformance described in the semantics for
    ref_frame_idx[ i ]
    (that uses RefValid to check that the reference frames are available)
    should be ignored

  * When using the inter prediction process, if RefValid[ refIdx ] is equal to 0, then
    the motion vector scaling and block inter prediction processes are not followed.
    Instead, preds[ refList ] should be generated using an alternative approach.
    For conformance testing, it may help to define the predicted samples in a standard way.
    The suggested approach is to fill preds[ refList ]
    with neutral gray samples, i.e. all values equal to 1 \<\< ( BitDepth - 1 ) .

