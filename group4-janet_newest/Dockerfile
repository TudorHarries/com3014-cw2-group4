FROM ruby:2.6.9
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /testing_docker
RUN gem install bundler -v 2.0.2
WORKDIR /testing_docker
ENV BUNDLER_VERSION 2.0.2
ADD Gemfile /testing_docker/Gemfile
ADD Gemfile.lock /testing_docker/Gemfile.lock
RUN bundle install
ADD . /testing_docker
