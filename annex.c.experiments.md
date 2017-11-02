## Annex C: Included Experiments
{:.no_count}

### Overview
{:.no_count}

This is a temporary section that describes how the specification relates to the current code base.

### Included Experiments

The specification has been updated to include the following list of adopted experiments:

| Experiment                    | Notes
| ----------------------------- | ---------------------------
| ext_partition                 | 
| max_tile                      | Bug 980 not yet fixed in code or spec
| new_multisymbol               |
| palette_delta_encoding        |
| HLS R19                       |
| altref2                       |
| cdef_singlepass               |
| cfl                           | Bug 928 not yet fixed in code or spec
| chroma_sub8x8                 |
| colorspace_headers            |
| compound_segment              | Bug 929 not yet fixed in code or spec
| dependent_horztiles           | May only be needed when no tile groups present?
| ext_delta_q                   |
| ext-comp-refs                 |
| interintra                    |
| loopfiltering_across_tiles    |
| mv_compress                   |
| palette_throughput            |
| reference_buffer              |
| smooth_hv                     |
| tempmv_signaling              |
| wedge                         |
| frame_size                    |
| parallel_deblocking           |
| tmv                           |
| alt_intra                     |
| aom_qm                        |
| cb4x4                         |
| cdef                          | Needs modification to support striped mode
| compound_round                |
| convolve_round                |
| daala_ec                      |
| delta_q                       |
| dual_filter                   |
| ec_adapt                      |
| ec_multisymbol                |
| ec_smallmul                   |
| ext_inter                     | Bug 857, 858, 951 not yet fixed in code or spec
| ext_refs                      | Bug 78 not yet fixed in code or spec
| ext-intra                     |
| ext-tx                        |
| filter_7bit                   |
| global_motion                 |
| independent_row_tile          |
| misc_fixes                    |
| motion_var                    |
| new_tokenset                  |
| one_sided_compound            |
| palette                       |
| rect_intra_pred               |
| rect_tx                       |
| ref-mv                        | Bug 981 not yet fixed in code or spec
| restricted                    |
| segmentation                  |
| map                           |
| update                        |
| simp_mv_pred                  |
| tile_groups                   |
| var_tx                        |
| warped_motion                 | Bug 950 not yet fixed in code or spec
| loopfilter_level              |
| deblock_13tap                 |
| gm_ref_mv                     |
| kf_ctx                        |
| intra_edge                    |
| simple_bwd_adapt              |
| ext_partition_types           | Bug 914 not yet fixed in code or spec
| mfmv                          |
| short_filter                  |
| frame_marker                  |
{:.table .table-sm .table-bordered }

### Excluded Experiments

The specification has not yet been updated with the following experiments:

| Experiment                    | Notes
| ----------------------------- | ---------------------------
| q_adapt_probs                 | Bug 936 not yet fixed
| txmg                          | Unclear if this is to be adopted
| daala_tx                      | Unclear if this is to be adopted
| filter_intra                  | Unclear if this is to be adopted
| ext_tile                      | Code still under development
| loop_restoration              | Code still under development
| striped_loop_restoration      | Code still under development
| txk_sel                       | Bugs 869, 866 not yet fixed in code
| lv_map                        | Bugs 840, 841 not yet fixed in code 
| CICP                          | No code for this yet
| Timecodes                     | No code for this yet
{:.table .table-sm .table-bordered }


