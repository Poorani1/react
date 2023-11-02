
export const POPULATION_BALANCE_TABLE_SAMPLE_DATA = [
    {
        "name": "Demographics",
        "variables": [
            {
                "variable_id": "FML_NBR",
                "control_mean": 200,
                "study_mean": 100,
                "smd": 0.05,
                "adj_control_mean": 300,
                "adj_study_mean": 100,
                "adj_smd": 0.04,
                "control_sd": 50,
                "study_sd": 50,
                "control_median": 20,
                "study_median": 10,
                "display_name": "Famale %",
                "measure_type": "PCT"
            },
            {
                "variable_id": "FML_NBR",
                "control_mean": 200,
                "study_mean": 100,
                "smd": 0.05,
                "adj_control_mean": 300,
                "adj_study_mean": 100,
                "adj_smd": 0.04,
                "control_sd": 50,
                "study_sd": 50,
                "control_median": 20,
                "study_median": 10,
                "display_name": "Age",
                "measure_type": "AGT"
            },
            {
                "variable_id": "FML_NBR",
                "control_mean": 200,
                "study_mean": 100,
                "smd": 0.05,
                "adj_control_mean": 300,
                "adj_study_mean": 100,
                "adj_smd": 0.04,
                "control_sd": 50,
                "study_sd": 50,
                "control_median": 20,
                "study_median": 10,
                "display_name": "Count",
                "measure_type": "BBT"
            }
        ],
        "children": []
    },
    {
        "name": "Geography",
        "variables": [{
            "variable_id": "FML_NBR",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "Central",
            "measure_type": "Central"
        },
        {
            "variable_id": "FML_NBR",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "West",
            "measure_type": "west"
        }
        ],
        "children": []
    },
    {
        "name": "Professional Metrics",
        "variables": [{
            "variable_id": "FML_NBR",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "Total",
            "measure_type": "total"
        },
        {
            "variable_id": "FML_NBR",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "Subtotal",
            "measure_type": "total"
        }
        ],
        "children": []
    },
    {
        "name": "Conditions",
        "variables": [{
            "variable_id": "FML_NBR",
            "control_mean": 40,
            "study_mean": 30,
            "smd": 0.03,
            "adj_control_mean": 3,
            "adj_study_mean": 1,
            "adj_smd": 0.04,
            "control_sd": 5,
            "study_sd": 5,
            "control_median": 20,
            "study_median": 10,
            "display_name": "%Obesse",
            "measure_type": "Obess"
        },
        {
            "variable_id": "FML_NBR",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "%Back",
            "measure_type": "Obess"
        },
        {
            "variable_id": "FML_NBR",
            "control_mean": 40,
            "study_mean": 30,
            "smd": 0.03,
            "adj_control_mean": 3,
            "adj_study_mean": 1,
            "adj_smd": 0.04,
            "control_sd": 5,
            "study_sd": 5,
            "control_median": 20,
            "study_median": 10,
            "display_name": "Sick",
            "measure_type": "Cold"
        },
        {
            "variable_id": "FML_NBR",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "flu",
            "measure_type": "flu"
        }
        ],
        "children": []
    },

    {
        "name": "Inpatient Metrics",
        "order": 1,
        "variables": [],
        "children": [
            {
                "name": "IP",
                "order": 1,
                "variables": [{
                    "variable_id": "INPT_ACT_BH_PMPM",
                    "control_mean": 200,
                    "study_mean": 100,
                    "smd": 0.05,
                    "adj_control_mean": 300,
                    "adj_study_mean": 100,
                    "adj_smd": 0.04,
                    "control_sd": 50,
                    "study_sd": 50,
                    "control_median": 20,
                    "study_median": 10,
                    "display_name": "Inpatient1 ",
                    "measure_type": "PMPM"
                },
                {
                    "variable_id": "INPT_ACT_BH_PMPM",
                    "control_mean": 20,
                    "study_mean": 10,
                    "smd": 0.05,
                    "adj_control_mean": 30,
                    "adj_study_mean": 10,
                    "adj_smd": 0.4,
                    "control_sd": 5,
                    "study_sd": 5,
                    "control_median": 2,
                    "study_median": 1,
                    "display_name": "Inpatient2",
                    "measure_type": "PMPM"
                }],
                "children": [
                    {
                        "name": "Inpatient Acute",
                        "order": 1,
                        "variables": [],
                        "children": [
                            {
                                "name": "Inpatient Behavioral Health",
                                "order": 1,
                                "variables": [
                                    {
                                        "variable_id": "INPT_ACT_BH_PMPM",
                                        "control_mean": 200,
                                        "study_mean": 100,
                                        "smd": 0.05,
                                        "adj_control_mean": 300,
                                        "adj_study_mean": 100,
                                        "adj_smd": 0.04,
                                        "control_sd": 50,
                                        "study_sd": 50,
                                        "control_median": 20,
                                        "study_median": 10,
                                        "display_name": "Inpatient4",
                                        "measure_type": "PMPM"
                                    },
                                    {
                                        "variable_id": "INPT_ACT_BH_PMPM",
                                        "control_mean": 200,
                                        "study_mean": 100,
                                        "smd": 0.05,
                                        "adj_control_mean": 300,
                                        "adj_study_mean": 100,
                                        "adj_smd": 0.04,
                                        "control_sd": 50,
                                        "study_sd": 50,
                                        "control_median": 20,
                                        "study_median": 10,
                                        "display_name": "Inpatient5",
                                        "measure_type": "PM1"
                                    },
                                    {
                                        "variable_id": "INPT_ACT_BH_PMPM",
                                        "control_mean": 20,
                                        "study_mean": 10,
                                        "smd": 0.5,
                                        "adj_control_mean": 30,
                                        "adj_study_mean": 10,
                                        "adj_smd": 0.4,
                                        "control_sd": 0,
                                        "study_sd": 5,
                                        "control_median": 2,
                                        "study_median": 1,
                                        "display_name": "Inpatient3",
                                        "measure_type": "PM2"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const JOB_STATUS_TABLE_SAMPLE_DATA = [
    {
        "analysis_job_id": "664dc4e8",
        "status": "In Progress",
        "error_code": null,
        "error_message": null,
        "created_by": "user",
        "created_time": "2022-08-29 12:01:30",
        "last_updated_time": "2022-08-29 12:01:30",
        "control_group_member_count": 20911,
        "study_group_member_count": 19220,
        "criteria": {
            "program_name": "COMPLEX CASE MANAGEMENT",
            "lob": "Medicare",
            "sub_lob": "All",
            "region": "All",
            "funding_type": "All",
            "amount_type": "All",
            "cohort_period_start": 202001,
            "cohort_period_end": 202201,
            "follow_up_period": 3
        },
        "stages": {
            "stage1": {
                "completion_pct": 0.3,
                "status": "In Progress"
            },
            "stage2": {
                "completion_pct": 0.0,
                "status": "Pending"
            }
        },
        "events": [
            {
                "event": "Job Created",
                "group": "Other",
                "status": "Success",
                "error_code": null,
                "error_message": null,
                "timestamp": "2022-08-29 12:01:31",
                "message": null,
                "user": "user",
                "source": "REST"
            }
        ]
    },
    {
        "analysis_job_id": "664dc4e9",
        "status": "In Progress",
        "error_code": null,
        "error_message": null,
        "created_by": "user",
        "created_time": "2022-08-29 12:01:30",
        "last_updated_time": "2022-08-29 12:01:30",
        "control_group_member_count": 20911,
        "study_group_member_count": 19220,
        "criteria": {
            "program_name": "DISEASE CASE MANAGEMENT",
            "lob": "Medicare",
            "sub_lob": "All",
            "region": "All",
            "funding_type": "All",
            "amount_type": "All",
            "cohort_period_start": 202001,
            "cohort_period_end": 202201,
            "follow_up_period": 3
        },
        "stages": {
            "stage1": {
                "completion_pct": 0.3,
                "status": "In Progress"
            },
            "stage2": {
                "completion_pct": 0.0,
                "status": "Pending"
            }
        },
        "events": [
            {
                "event": "Job Created",
                "group": "Other",
                "status": "Success",
                "error_code": null,
                "error_message": null,
                "timestamp": "2022-08-29 12:01:31",
                "message": null,
                "user": "user",
                "source": "REST"
            }
        ]
    }
];

export const CHART_SAMPLE_DATA = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
];

export const csvJSONData = {'index': [0, 1, 2], 'columns': ['Member_Id', 'State Code', 'Risk Score', 'Weight'], 'data': [[1, 'CA', 0.1, 0.7], [2, 'GA', 0.2, 0.8], [3, 'XA', 0.3, 0.3]]};