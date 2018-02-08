## Annex C: Included Experiments
{:.no_count}

### Overview
{:.no_count}

This is a temporary section that describes how the specification relates to the current code base.

### Included Experiments

The specification has been updated to include the following list of adopted experiments:

| Experiment                    | Notes
| ----------------------------- | ---------------------------
| alt_intra                     |
| altref2                       |
| amvr                          | Bug 1048 not yet fixed in code or spec
| aom_qm                        |
| cb4x4                         |
| cdef                          |
| cdef_singlepass               |
| cfl                           |
| chroma_sub8x8                 |
| CICP                          |
| coef_ctx_reduce               |
| colorspace_headers            |
| compound_round                |
| compound_segment              |
| convolve_round                |
| daala_ec                      |
| deblock_13tap                 |
| delta_q                       |
| dependent_horztilegroups      |
| dependent_horztiles           |
| dist_8x8                      |
| dual_filter                   |
| ec_adapt                      |
| ec_multisymbol                |
| ec_smallmul                   |
| ext-comp-refs                 |
| ext_delta_q                   |
| ext-intra                     |
| ext-intra-mod                 |
| ext_intra_mod2                |
| ext_inter                     | Bug 857 not yet fixed in code or spec
| ext_partition                 | 
| ext_partition_types           |
| ext_qm                        |
| ext_refs                      | 
| ext_skip                      |
| ext-tx                        |
| ext_warped_motion             |
| fast_sgr                      |
| filter_7bit                   |
| filter_intra                  |
| frame_marker                  |
| frame_sign_bias               |
| frame_size                    |
| global_motion                 |
| gm_ref_mv                     |
| HLS R18                       |
| HLS R19                       |
| horzonly_frame_superres       |
| independent_row_tile          |
| interintra                    |
| intrabc                       |
| intra_edge                    |
| jnt_comp                      |
| kf_ctx                        |
| loop_restoration              |
| loopfilter_level              |
| loopfiltering_across_tiles    |
| loopfilter_across_tiles_ext   |
| lv_map                        |
| lv_map_multi                  |
| max_tile                      |
| mfmv                          |
| misc_fixes                    |
| mono_video                    |
| motion_var                    |
| mv_compress                   |
| new_multisymbol               |
| new_quant                     |
| new_tokenset                  |
| no_frame_context_signalling   |
| one_sided_compound            |
| palette                       |
| palette_delta_encoding        |
| palette_throughput            |
| parallel_deblocking           |
| q_adapt_probs                 | This experiment currently has no effect
| rect_intra_pred               |
| rect_tx                       |
| rect_tx_ext                   |
| rect_tx_ext_intra             |
| ref_adapt                     |
| ref-mv                        |
| reference_buffer              |
| restricted segmentation map update |
| scalability                   |
| segment_pred_last             |
| segment_zeromv                |
| short_filter                  |
| simp_mv_pred                  |
| simple_bwd_adapt              |
| simplify_tx_mode              |
| smooth_hv                     |
| spatial_segmentation          |
| striped_loop_restoration      |
| tempmv_signaling              |
| tile_info_first               |
| tile_groups                   |
| timecodes                     |
| tx64x64                       |
| txk_sel                       |
| txmg                          |
| var_tx                        |
| warped_motion                 |
| wedge                         |
{:.table .table-sm .table-bordered }

### Excluded Experiments

The specification has not yet been updated with the following experiments:

| Experiment                    | Notes
| ----------------------------- | ---------------------------
| ext_tile                      | Waiting for definition of auxiliary stream
| film_grain_noise              | Awaiting bugs 1344,1345,1346,1347,1348,1349 to be resolved
| opt_ref_mv                    | Awaiting bug 1288 to be resolved
| obu_move_length               | No code at present
{:.table .table-sm .table-bordered }


