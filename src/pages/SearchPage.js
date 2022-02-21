import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import Response from '../response';
import googleIcon from '../assets/images/google-logo-9834.png';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const SearchPage = () => {

    // eslint-disable-next-line no-unused-vars
    const [{term}, dispatch] = useStateValue();

    //LIVE API CALL
    const {data} = useGoogleSearch(term); 

    //MOCK API CALL
    // const data = Response;

    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to="/">
                    <img className='searchPage_logo' src={googleIcon} alt="" />
                </Link>
                <div className='searchPage_headerBody'>
                    <Search hideButtons />

                    <div className='searchPage_options'>
                        <div className='searchPage_optionsLeft'>
                            <div className='searchPage_option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage_option'>
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className='searchPage_option'>
                                <ImageSearchIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className='searchPage_option'>
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className='searchPage_option'>
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className='searchPage_option'>
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className='searchPage_optionsRight'>
                            <div className='searchPage_option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage_option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className='searchPage_results'>
                    <p className='searchPage_resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPage_result'>
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && (
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img className='searchPage_resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
                                    )
                                )}

                                {item.displayLink}
                            </a>
                            <a className='searchPage_resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage_resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}

                </div>
            )}

        </div>
    )
}

export default SearchPage;

// https://developers.google.com/custom-search/v1/using_rest

// https://cse.google.com/cse/create/new 
