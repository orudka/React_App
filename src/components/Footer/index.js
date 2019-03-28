import React from 'react';
import { Grid } from 'react-bootstrap';

export default function FooterComponent() {
    return (
        <footer>
            <Grid>
            <div>
                <p className="small">Copyright © Keep It Simple Blog 2019</p>
            </div>
            </Grid>
        </footer>
    );
}