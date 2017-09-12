/**
 * This Gruntfile is used to build the scripts.
 */

/*jshint
    unused: true,
    debug: true,
    devel: true,
    browser: true,
    asi: true
 */


module.exports = function( grunt ) {

    // Initial grunt configurations
    grunt.initConfig({


        // Read the package manifest.
        pkg: grunt.file.readJSON( 'package.json' ),


        // Concatenate the files and add banners.
        concat: {
            options: {
                banner: '/*!\n' +
                        ' * <%= pkg.title %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        ' *\n' +
                        ' * Hosted on <%= pkg.homepage %>\n' +
                        ' * Copyright (c) <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
                        ' * Licensed under <%= pkg.licenses[ 0 ].type %> license.\n' +
                        ' */\n\n'
            },
            scripts: {
                src: '_scripts/*.js',
                dest: 'media/js/main.js'
            }
        },


        // Lint the build files.
        jshint: {
            files: [ 'media/js/main.js' ]
        },


        // Watch the project files.
        watch: {
            files: [ '_scripts/*.js' ],
            tasks: [ 'default' ]
        }
    }) //grunt.initConfig


    // Load the NPM tasks.
    grunt.loadNpmTasks( 'grunt-contrib-concat' )
    grunt.loadNpmTasks( 'grunt-contrib-watch' )
    grunt.loadNpmTasks( 'grunt-contrib-jshint' )


    // Register the default tasks.
    grunt.registerTask( 'default', [ 'jshint' ] )

    grunt.loadNpmTasks('grunt-replace');
    grunt.initConfig({
      replace: {
        dist: {
          options: {
            patterns: [
              {
                json: {
                  "syntax_element": "<b>syntax_element</b>",
                  "padding_bit": "<b>padding_bit</b>",
                  "zero_bit": "<b>zero_bit</b>",
                  "frame_marker": "<b>frame_marker</b>",
                  "profile_low_bit": "<b>profile_low_bit</b>",
                  "profile_high_bit": "<b>profile_high_bit</b>",
                  "reserved_zero": "<b>reserved_zero</b>",
                  "show_existing_frame": "<b>show_existing_frame</b>",
                  "frame_to_show_map_idx": "<b>frame_to_show_map_idx</b>",
                  "frame_type": "<b>frame_type</b>",
                  "show_frame": "<b>show_frame</b>",
                  "error_resilient_mode": "<b>error_resilient_mode</b>",
                  "intra_only": "<b>intra_only</b>",
                  "reset_frame_context": "<b>reset_frame_context</b>",
                  "refresh_frame_flags": "<b>refresh_frame_flags</b>",
                  "ref_frame_idx[ i ]": "<b>ref_frame_idx[ i ]</b>",
                  "ref_frame_sign_bias[ LAST_FRAME + i ]": "<b>ref_frame_sign_bias[ LAST_FRAME + i ]</b>",
                  "allow_high_precision_mv": "<b>allow_high_precision_mv</b>",
                  "refresh_frame_context": "<b>refresh_frame_context</b>",
                  "frame_parallel_decoding_mode": "<b>frame_parallel_decoding_mode</b>",
                  "frame_context_idx": "<b>frame_context_idx</b>",
                  "header_size_in_bytes": "<b>zero_bit</b>",
                  "frame_sync_byte_0": "<b>frame_sync_byte_0</b>",
                  "frame_sync_byte_1": "<b>frame_sync_byte_1</b>",
                  "frame_sync_byte_2": "<b>frame_sync_byte_2</b>",
                  "ten_or_twelve_bit": "<b>ten_or_twelve_bit</b>",
                  "color_space": "<b>color_space</b>",
                  "color_range": "<b>color_range</b>",
                  "subsampling_x": "<b>subsampling_x</b>",
                  "subsampling_y": "<b>subsampling_y</b>",
                  "frame_width_minus_1": "<b>frame_width_minus_1</b>",
                  "frame_height_minus_1": "<b>frame_height_minus_1</b>",
                  "render_and_frame_size_different": "<b>render_and_frame_size_different</b>",
                  "render_width_minus_1": "<b>render_width_minus_1</b>",
                  "render_height_minus_1": "<b>render_height_minus_1</b>",
                  "found_ref": "<b>found_ref</b>",
                  "is_filter_switchable": "<b>is_filter_switchable</b>",
                  "raw_interpolation_filter": "<b>raw_interpolation_filter</b>",
                  "loop_filter_level": "<b>loop_filter_level</b>",
                  "loop_filter_sharpness": "<b>loop_filter_sharpness</b>",
                  "loop_filter_delta_enabled": "<b>loop_filter_delta_enabled</b>",
                  "loop_filter_delta_update": "<b>loop_filter_delta_update</b>",
                  "update_ref_delta": "<b>update_ref_delta</b>",
                  "loop_filter_ref_deltas[ i ]": "<b>loop_filter_ref_deltas[ i ]</b>",
                  "update_mode_delta": "<b>update_mode_delta</b>",
                  "loop_filter_mode_deltas[ i ]": "<b>loop_filter_mode_deltas[ i ]</b>",
                  "base_q_idx": "<b>base_q_idx</b>",
                  "delta_coded": "<b>delta_coded</b>",
                  "delta_q": "<b>delta_q</b>",
                  "segmentation_enabled": "<b>segmentation_enabled</b>",
                  "segmentation_update_map": "<b>segmentation_update_map</b>",
                  "segmentation_temporal_update": "<b>segmentation_temporal_update</b>",
                  "segmentation_update_data": "<b>segmentation_update_data</b>",
                  "segmentation_abs_or_delta_update": "<b>segmentation_abs_or_delta_update</b>",
                  "feature_enabled": "<b>feature_enabled</b>",
                  "feature_sign": "<b>feature_sign</b>",
                  "prob_coded": "<b>prob_coded</b>",
                  "prob": "<b>prob</b>",
                  "increment_tile_cols_log2": "<b>increment_tile_cols_log2</b>",
                  "tile_rows_log2": "<b>tile_rows_log2</b>",
                  "increment_tile_rows_log2": "<b>increment_tile_rows_log2</b>",
                  "tile_sz_mag": "<b>tile_sz_mag</b>",
                  "tx_mode_select": "<b>tx_mode_select</b>",
                  "TxMode = tx_mode_select": "<b>TxMode = tx_mode_select</b>",
                  "tx_mode": "<b>tx_mode</b>",
                  "update_prob": "<b>update_prob</b>",
                  "bit": "<b>bit</b>",
                  "sub_exp_val": "<b>sub_exp_val</b>",
                  "sub_exp_val_minus_16": "<b>sub_exp_val_minus_16</b>",
                  "sub_exp_val_minus_32": "<b>sub_exp_val_minus_32</b>",
                  "v": "<b>v</b>",
                  "update_probs": "<b>update_probs</b>",
                  "reference_select": "<b>reference_select</b>",
                  "non_single_reference": "<b>non_single_reference</b>",
                  "partition": "<b>partition</b>",
                  "default_intra_mode": "<b>default_intra_mode</b>",
                  "default_uv_mode": "<b>default_uv_mode</b>",
                  "segment_id": "<b>segment_id</b>",
                  "skip": "<b>skip</b>",
                  "tx_size": "<b>tx_size</b>",
                  "seg_id_predicted": "<b>seg_id_predicted</b>",
                  "is_inter": "<b>is_inter</b>",
                  "intra_mode": "<b>intra_mode</b>",
                  "sub_intra_mode": "<b>sub_intra_mode</b>",
                  "uvMode": "<b>uvMode</b>",
                  "inter_mode": "<b>inter_mode</b>",
                  "interp_filter": "<b>interp_filter</b>",
                  "comp_mode": "<b>comp_mode</b>",
                  "comp_ref": "<b>comp_ref</b>",
                  "single_ref_p1": "<b>single_ref_p1</b>",
                  "single_ref_p2": "<b>single_ref_p2</b>",
                  "mv_joint": "<b>mv_joint</b>",
                  "mv_sign": "<b>mv_sign</b>",
                  "mv_class": "<b>mv_class</b>",
                  "mv_class0_bit": "<b>mv_class0_bit</b>",
                  "mv_class0_fr": "<b>mv_class0_fr</b>",
                  "mv_class0_hp": "<b>mv_class0_hp</b>",
                  "mv_bit": "<b>mv_bit</b>",
                  "mv_fr": "<b>mv_fr</b>",
                  "mv_hp": "<b>mv_hp</b>",
                  "more_coefs": "<b>more_coefs</b>",
                  "token": "<b>token</b>",
                  "dc_head_token": "<b>dc_head_token</b>",
                  "ac_head_token": "<b>ac_head_token</b>",
                  "last_head_token": "<b>last_head_token</b>",
                  "tail_token": "<b>tail_token</b>",
                  "sign_bit": "<b>sign_bit</b>",
                }
              }
            ]
          },
          files: [
            {src: ['_site/index.html'], dest: '_site/av1-spec.html'}
          ]
        }
      }
    });
    grunt.registerTask('default', 'replace');

} //module.exports


