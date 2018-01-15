## Annex C: Included Experiments
{:.no_count}

### Overview
{:.no_count}

This is a temporary section that describes how the specification relates to the current code base.

### Included Experiments

The specification has been updated to include the following list of adopted experiments:

| Experiment                    | Notes
| ----------------------------- | ---------------------------
| HLS R19                       |
| alt_intra                     |
| altref2                       |
| amvr                          | Bug 1048 not yet fixed in code or spec
| aom_qm                        |
| cb4x4                         |
| cdef                          |
| cdef_singlepass               |
| cfl                           | Bug 928 not yet fixed in code or spec
| chroma_sub8x8                 |
| colorspace_headers            |
| compound_round                |
| compound_segment              | Bug 929 not yet fixed in code or spec
| convolve_round                |
| daala_ec                      |
| deblock_13tap                 |
| delta_q                       |
| dependent_horztilegroups      |
| dependent_horztiles           |
| dual_filter                   |
| ec_adapt                      |
| ec_multisymbol                |
| ec_smallmul                   |
| ext-comp-refs                 |
| ext-intra                     |
| ext-intra-mod                 |
| ext-tx                        |
| ext_delta_q                   |
| ext_inter                     | Bug 857, 858, 951 not yet fixed in code or spec
| ext_partition                 | 
| ext_partition_types           | Bug 914 not yet fixed in code or spec
| ext_refs                      | 
| ext_skip                      |
| ext_warped_motion             | Included in spec, but not yet adopted
| filter_7bit                   |
| frame_marker                  |
| frame_size                    |
| global_motion                 |
| gm_ref_mv                     |
| independent_row_tile          |
| interintra                    |
| intrabc                       | Bugs 1229, 1230 not yet fixed in code or spec
| intra_edge                    |
| kf_ctx                        |
| loop_restoration              |
| loopfilter_level              |
| loopfiltering_across_tiles    |
| loopfilter_across_tiles_ext   |
| lv_map                        | Bugs 840, 841 not yet fixed in code 
| lv_map_multi                  | Bugs 840, 841 not yet fixed in code 
| max_tile                      | Bug 980 not yet fixed in code or spec
| mfmv                          |
| misc_fixes                    |
| motion_var                    |
| mv_compress                   |
| new_multisymbol               |
| new_tokenset                  |
| no_frame_context_signalling   |
| one_sided_compound            |
| palette                       |
| palette_delta_encoding        |
| palette_throughput            |
| parallel_deblocking           |
| rect_intra_pred               |
| rect_tx                       |
| ref-mv                        | Bug 981 not yet fixed in code or spec
| reference_buffer              |
| restricted segmentation map update |
| segment_pred_last             | Bug 1091 not yet fixed in code
| segment_zeromv                |
| short_filter                  |
| simp_mv_pred                  |
| simple_bwd_adapt              |
| simplify_tx_mode              |
| smooth_hv                     |
| striped_loop_restoration      |
| tempmv_signaling              |
| tile_groups                   |
| tx64x64                       |
| txk_sel                       | Bugs 869, 866 not yet fixed in code
| txmg                          |
| var_tx                        |
| warped_motion                 | Bug 950 not yet fixed in code or spec
| wedge                         |
{:.table .table-sm .table-bordered }

### Excluded Experiments

The specification has not yet been updated with the following experiments:

| Experiment                    | Notes
| ----------------------------- | ---------------------------
| CICP                          |
| Timecodes                     |
| coef_ctx_reduce               |
| ext_tile                      |
| film_grain_noise              |
| filter_intra                  | 
| horzonly_frame_superres       |
| jnt_comp                      |
| mono_video                    |
| new_quant                     |
| q_adapt_probs                 | Bug 936 not yet fixed
| rect_tx_ext                   |
| rect_tx_ext_intra             |
| scalability                   |
| spatial_segmentation          |
{:.table .table-sm .table-bordered }


