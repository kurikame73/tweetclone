package com.example.demo.domain.tweet.controller;

import com.example.demo.domain.tweet.entity.Tweet;
import com.example.demo.domain.tweet.repository.TweetRepository;
import com.example.demo.domain.tweet.service.TweetService;
import com.example.demo.domain.user.entity.User;
import com.example.demo.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/tweets")
@RequiredArgsConstructor
public class TweetController {
    private final TweetService tweetService;
    private final UserService userService;
    private final TweetRepository tweetRepository;

    @GetMapping
    public List<Tweet> getAllTweets() {
        return tweetService.getAllTweets();
    }

    @PostMapping
    public ResponseEntity<?> postTweet(@RequestBody Tweet tweet, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.findByUsername(userDetails.getUsername());
        tweet.setAuthor(user);
        tweet.setCreatedAt(LocalDateTime.now());
        tweetService.saveTweet(tweet);
        return ResponseEntity.ok("Tweet posted successfully");
    }
}
